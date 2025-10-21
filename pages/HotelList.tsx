
import React, { useState, useEffect } from 'react';
import type { Hotel } from '../types';
import { getHotels } from '../services/api';
import HotelCard from '../components/HotelCard';

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      const data = await getHotels();
      setHotels(data);
      setLoading(false);
    };
    fetchHotels();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading hotels...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Hotels & Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
