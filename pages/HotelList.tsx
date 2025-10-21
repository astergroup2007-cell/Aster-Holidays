import React, { useState, useEffect } from 'react';
import type { TourPackage } from '../types';
import { getTourPackages } from '../services/api';
import TourPackageCard from '../components/HotelCard'; // Repurposed as TourPackageCard

// Skeleton loader component for better UX
const TourPackageCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="w-full h-56 bg-gray-200 animate-pulse"></div>
    <div className="p-6">
      <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded mb-3"></div>
      <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded mb-4"></div>
      <div className="h-5 w-1/3 bg-gray-200 animate-pulse rounded"></div>
    </div>
  </div>
);


const TourPackages: React.FC = () => {
  const [tours, setTours] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const data = await getTourPackages();
        setTours(data);
      } catch (error) {
        console.error("Failed to fetch tour packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  if (loading) {
    return (
       <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold font-heading text-secondary mb-8 text-center">Our Tour Packages</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Finding the best adventures for you...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <TourPackageCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
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