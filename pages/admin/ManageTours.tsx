import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../../types';
import { getTourPackages } from '../../services/api'; // Using the mock API
import TourForm from '../../components/admin/TourForm';

const ManageTours: React.FC = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<TourPackage | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      const data = await getTourPackages();
      setTours(data);
      setLoading(false);
    };
    fetchTours();
  }, []);

  const handleAdd = () => {
    setEditingTour(null);
    setIsFormOpen(true);
  };

  const handleEdit = (tour: TourPackage) => {
    setEditingTour(tour);
    setIsFormOpen(true);
  };

  const handleDelete = (tourId: string) => {
    if (window.confirm('Are you sure you want to delete this tour? This action cannot be undone.')) {
      // In a real app, you would call an API to delete.
      // Here, we'll just filter it out from the state.
      setTours(prevTours => prevTours.filter(tour => tour.id !== tourId));
      alert('Tour deleted successfully. (Note: This change is not persisted.)');
    }
  };
  
  const handleSave = (tour: TourPackage) => {
    // In a real app, you'd send this to a backend API.
    // Here we'll simulate it by updating the state.
    if (editingTour) { // Editing existing
      setTours(prevTours => prevTours.map(t => t.id === tour.id ? tour : t));
    } else { // Adding new
      const newTour = { ...tour, id: `tour-${Date.now()}` };
      setTours(prevTours => [...prevTours, newTour]);
    }
    alert('Tour saved successfully. (Note: This change is not persisted.)');
    setIsFormOpen(false);
  };


  if (loading) return <div>Loading tours...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Tour Packages</h1>
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Add New Tour
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map(tour => (
              <tr key={tour.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tour.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tour.duration}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">₹{tour.price.toLocaleString('en-IN')}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button onClick={() => handleEdit(tour)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button onClick={() => handleDelete(tour.id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <TourForm 
          tour={editingTour}
          onSave={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default ManageTours;
