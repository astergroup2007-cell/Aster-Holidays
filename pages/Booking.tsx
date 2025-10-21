import React, { useState, useEffect, useContext } from 'react';
// FIX: Import `Link` from `react-router-dom` to be used in the component.
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Hotel } from '../types';
import { getHotelById } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.user) {
      setName(authContext.user.name);
      setEmail(authContext.user.email);
    }
  }, [authContext]);

  useEffect(() => {
    const fetchHotel = async () => {
      if (!id) return;
      setLoading(true);
      const data = await getHotelById(id);
      if (data) {
        setHotel(data);
      }
      setLoading(false);
    };
    fetchHotel();
  }, [id]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway like Razorpay
    alert('Booking successful! (This is a demo)');
    navigate('/');
  };

  if (loading) {
    return <div className="text-center py-20">Loading booking details...</div>;
  }

  if (!hotel) {
    return <div className="text-center py-20">Hotel not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-heading mb-8">Confirm Your Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold font-heading mb-4">{hotel.name}</h2>
          <img src={hotel.images[0]} alt={hotel.name} className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          <p className="text-lg font-bold text-accent">Price: ₹{hotel.pricePerNight.toLocaleString('en-IN')} / night</p>
          <p className="text-gray-600 mt-2">{hotel.location}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-heading mb-6">Guest Details</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                required
              />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600">
              Confirm & Pay
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">By clicking "Confirm & Pay", you agree to our <Link to="/terms-and-conditions" className="text-accent hover:underline">Terms and Conditions</Link>.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;