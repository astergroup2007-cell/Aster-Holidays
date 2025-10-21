import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getTourPackages, addTourPackage, updateTourPackage, deleteTourPackage } from '../../services/api';
import type { TourPackage } from '../../types';
import TourForm from '../../components/admin/TourForm';

const ManageTours: React.FC = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTour, setEditingTour] = useState<TourPackage | null>(null);

  const fetchTours = useCallback(async () => {
    setIsLoading(true);
    const data = await getTourPackages();
    setTours(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  const handleAdd = () => {
    setEditingTour(null);
    setIsFormVisible(true);
  };

  const handleEdit = (tour: TourPackage) => {
    setEditingTour(tour);
    setIsFormVisible(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this tour package?')) {
      await deleteTourPackage(id);
      fetchTours();
    }
  };

  const handleSave = async (tourData: TourPackage) => {
    if (editingTour) {
      await updateTourPackage(tourData);
    } else {
      const { id, ...newTourData } = tourData; // remove dummy id
      await addTourPackage(newTourData);
    }
    setIsFormVisible(false);
    setEditingTour(null);
    fetchTours();
  };

  return (
    <div className="p-8 bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-secondary">Manage Tour Packages</h1>
          <div className="space-x-4">
             <Link to="/admin" className="text-primary hover:underline">&larr; Back to Dashboard</Link>
             <button onClick={handleAdd} className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600">
               Add New Tour
             </button>
          </div>
        </div>
        
        {isLoading ? (
          <p>Loading tours...</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tours.map(tour => (
                  <tr key={tour.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₹{tour.price.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleEdit(tour)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                      <button onClick={() => handleDelete(tour.id)} className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isFormVisible && (
          <TourForm 
            tour={editingTour}
            onSave={handleSave}
            onCancel={() => {
              setIsFormVisible(false);
              setEditingTour(null);
            }} 
          />
        )}
      </div>
    </div>
  );
};

export default ManageTours;
