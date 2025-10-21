import React, { useState, useEffect } from 'react';
import type { Hotel } from '../../types';
import { uploadImage } from '../../services/api';

interface HotelFormProps {
  hotel?: Hotel | null;
  onSave: (hotel: Omit<Hotel, 'id'>, newImages: File[]) => void;
  onCancel: () => void;
}

const HotelForm: React.FC<HotelFormProps> = ({ hotel, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Hotel, 'id' | 'images'> & { images: string[] }>({
    name: '',
    location: '',
    price: 0,
    description: '',
    images: [],
  });
  const [newImageFiles, setNewImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (hotel) {
      setFormData({
        name: hotel.name,
        location: hotel.location,
        price: hotel.price,
        description: hotel.description,
        images: hotel.images || [],
      });
    }
  }, [hotel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setNewImageFiles(files);
      
      // FIX: Added type assertion `as Blob` to resolve TypeScript error where `file` was inferred as `unknown`.
      const previews = files.map(file => URL.createObjectURL(file as Blob));
      setImagePreviews(previews);
    }
  };
  
  const handleRemoveExistingImage = (imageUrl: string) => {
    setFormData(prev => ({...prev, images: prev.images.filter(url => url !== imageUrl)}));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Upload new images to Firebase Storage
      const newImageUrls = await Promise.all(
        newImageFiles.map(file => uploadImage(file))
      );
      
      const finalHotelData = {
        ...formData,
        images: [...formData.images, ...newImageUrls], // Combine existing and new image URLs
      };

      onSave(finalHotelData, newImageFiles);

    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">{hotel ? 'Edit' : 'Add'} Hotel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Hotel Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="number" name="price" placeholder="Price per night" value={formData.price} onChange={handleChange} required className="w-full border p-2 rounded" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="w-full border p-2 rounded" rows={4} />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload New Images</label>
            <input type="file" multiple onChange={handleImageChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
          </div>

          {/* Image Previews */}
          <div className="grid grid-cols-3 gap-4">
            {formData.images.map((url, index) => (
              <div key={`existing-${index}`} className="relative group">
                <img src={url} alt="Existing" className="w-full h-24 object-cover rounded" />
                <button type="button" onClick={() => handleRemoveExistingImage(url)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100">&times;</button>
              </div>
            ))}
            {imagePreviews.map((previewUrl, index) => (
              <div key={`new-${index}`} className="relative">
                <img src={previewUrl} alt="New" className="w-full h-24 object-cover rounded" />
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded" disabled={isUploading}>Cancel</button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded" disabled={isUploading}>
              {isUploading ? 'Saving...' : 'Save Hotel'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelForm;