import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../../types';
import { getTourPackages, addTourPackage, updateTourPackage, deleteTourPackage } from '../../services/api';
import TourForm from '../../components/admin/TourForm';

const ManageTours: React.FC = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<TourPackage | null>(null);

  const fetchTours = async () => {
    setLoading(true);
    const data = await getTourPackages();
    setTours(data);
    setLoading(false);
  };

  useEffect(() => {
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

  const handleDelete = async (tourId: string) => {
    if (window.confirm('Are you sure you want to delete this tour package?')) {
      try {
        await deleteTourPackage(tourId);
        await fetchTours(); // Refresh list
        alert('Tour package deleted successfully.');
      } catch (error) {
        console.error("Failed to delete tour:", error);
        alert('Failed to delete tour.');
      }
    }
  };

  const handleSave = async (tourData: Omit<TourPackage, 'id'>) => {
    try {
      if (editingTour) {
        await updateTourPackage({ ...tourData, id: editingTour.id });
      } else {
        await addTourPackage(tourData);
      }
      await fetchTours(); // Refresh list
      setIsFormOpen(false);
      alert('Tour package saved successfully.');
    } catch (error) {
      console.error("Failed to save tour:", error);
      alert('Failed to save tour.');
    }
  };

  if (loading) return <div className="text-center p-8">Loading tour packages...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Tour Packages</h1>
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">
          + Add New Tour
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Duration</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {tours.map(tour => (
              <tr key={tour.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tour.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tour.duration}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">₹{tour.price.toLocaleString('en-IN')}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{tour.category}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
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
