import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../../types';
import { uploadImage } from '../../services/api';

interface TourFormProps {
  tour: TourPackage | null;
  onSave: (tourData: Omit<TourPackage, 'id'>) => void;
  onCancel: () => void;
}

const TourForm: React.FC<TourFormProps> = ({ tour, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Omit<TourPackage, 'id'>>({
    name: '',
    duration: '',
    price: 0,
    image: '',
    destinationsCovered: [],
    highlights: [],
    category: 'Family',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (tour) {
      setFormData({
        name: tour.name,
        duration: tour.duration,
        price: tour.price,
        image: tour.image,
        destinationsCovered: tour.destinationsCovered,
        highlights: tour.highlights,
        category: tour.category,
      });
    }
  }, [tour]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'destinationsCovered' | 'highlights') => {
    setFormData(prev => ({ ...prev, [field]: e.target.value.split(',').map(s => s.trim()) }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    let imageUrl = formData.image;

    try {
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      
      onSave({ ...formData, image: imageUrl });

    } catch (error) {
      console.error("Error saving tour:", error);
      alert("Failed to save tour package. Check console for details.");
    } finally {
        setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[95vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">{tour ? 'Edit' : 'Add'} Tour Package</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Tour Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="duration" placeholder="Duration (e.g., 5 Nights / 6 Days)" value={formData.duration} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="w-full border p-2 rounded" />
          <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="Family">Family</option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Cultural">Cultural</option>
            <option value="Adventure">Adventure</option>
          </select>
          <input type="text" name="destinationsCovered" placeholder="Destinations (comma separated)" value={formData.destinationsCovered.join(', ')} onChange={e => handleArrayChange(e, 'destinationsCovered')} required className="w-full border p-2 rounded" />
          <textarea name="highlights" placeholder="Highlights (comma separated)" value={formData.highlights.join(', ')} onChange={e => handleArrayChange(e as any, 'highlights')} required className="w-full border p-2 rounded" rows={3} />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image</label>
            <input type="file" onChange={handleImageChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
            {(formData.image || imageFile) && (
              <img src={imageFile ? URL.createObjectURL(imageFile) : formData.image} alt="Preview" className="mt-4 h-32 object-cover rounded"/>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded" disabled={isUploading}>Cancel</button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded" disabled={isUploading}>
              {isUploading ? 'Saving...' : 'Save Tour'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourForm;
