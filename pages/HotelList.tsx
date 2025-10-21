import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../types';
import { getTourPackages } from '../services/api';
import TourPackageCard from '../components/HotelCard'; // Repurposed as TourPackageCard

const TourPackages: React.FC = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      const data = await getTourPackages();
      setTours(data);
      setLoading(false);
    };
    fetchTours();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading tour packages...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-heading text-secondary mb-8 text-center">Our Tour Packages</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Browse our complete range of tour packages for Northeast India, Bhutan & Nepal. We offer customizable itineraries at the best prices to make your dream vacation a reality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourPackageCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourPackages;