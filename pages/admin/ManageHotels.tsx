import React, { useState, useEffect } from 'react';
import type { Hotel } from '../../types';
import { getHotels, addHotel, updateHotel, deleteHotel } from '../../services/api';
import HotelForm from '../../components/admin/HotelForm';

const ManageHotels: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);

  const fetchHotels = async () => {
    setLoading(true);
    try {
      const data = await getHotels();
      setHotels(data);
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
      alert("Could not fetch hotels. Please check your Firebase configuration.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleAdd = () => {
    setEditingHotel(null);
    setIsFormOpen(true);
  };

  const handleEdit = (hotel: Hotel) => {
    setEditingHotel(hotel);
    setIsFormOpen(true);
  };

  const handleDelete = async (hotel: Hotel) => {
    if (window.confirm(`Are you sure you want to delete "${hotel.name}"? This will also delete all its images.`)) {
      try {
        await deleteHotel(hotel);
        await fetchHotels(); // Refresh list
        alert('Hotel deleted successfully.');
      } catch (error) {
        console.error("Failed to delete hotel:", error);
        alert('Failed to delete hotel.');
      }
    }
  };
  
  const handleSave = async (hotelData: Omit<Hotel, 'id'>, newImages: File[]) => {
    try {
      if (editingHotel) {
        await updateHotel({ ...hotelData, id: editingHotel.id });
      } else {
        await addHotel(hotelData);
      }
      await fetchHotels(); // Refresh list
      setIsFormOpen(false);
      alert('Hotel saved successfully.');
    } catch (error) {
      console.error("Failed to save hotel:", error);
      alert('Failed to save hotel.');
    }
  };

  if (loading) return <div className="text-center p-8">Loading hotels from Firebase...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Hotels</h1>
        <button onClick={handleAdd} className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">
          + Add New Hotel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hotel.images[0] || 'https://via.placeholder.com/400x300'} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-secondary truncate">{hotel.name}</h3>
              <p className="text-gray-600 text-sm">{hotel.location}</p>
              <p className="text-lg font-semibold text-accent mt-2">₹{hotel.price.toLocaleString('en-IN')} / night</p>
              <div className="flex justify-end space-x-2 mt-4">
                <button onClick={() => handleEdit(hotel)} className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                <button onClick={() => handleDelete(hotel)} className="text-sm text-red-600 hover:text-red-900 font-medium">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <HotelForm 
          hotel={editingHotel}
          onSave={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default ManageHotels;