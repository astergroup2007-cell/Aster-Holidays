import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../../types';

interface TourFormProps {
  tour?: TourPackage | null;
  onSave: (tour: TourPackage) => void;
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

  useEffect(() => {
    if (tour) {
      setFormData(tour);
    }
  }, [tour]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'price') {
        setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else if (name === 'destinationsCovered' || name === 'highlights') {
        setFormData(prev => ({ ...prev, [name]: value.split(',').map(s => s.trim()) }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: tour?.id || '', ...formData }); // Pass a dummy id if new
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">{tour ? 'Edit' : 'Add'} Tour Package</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Duration</label>
            <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Destinations Covered (comma-separated)</label>
            <textarea name="destinationsCovered" value={formData.destinationsCovered.join(', ')} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Highlights (comma-separated)</label>
            <textarea name="highlights" value={formData.highlights.join(', ')} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required className="w-full border p-2 rounded">
              <option value="Family">Family</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Adventure">Adventure</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourForm;
