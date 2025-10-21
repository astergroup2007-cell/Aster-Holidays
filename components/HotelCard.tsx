import React from 'react';
import { Link } from 'react-router-dom';
import type { TourPackage } from '../types';

interface TourPackageCardProps {
  tour: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
      <Link to={`/hotel/${tour.id}`}>
        <div className="relative">
          <img className="w-full h-56 object-cover" src={tour.image} alt={tour.name} />
          <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
            {tour.duration}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold font-heading text-secondary mb-2 group-hover:text-primary truncate">{tour.name}</h3>
          <p className="text-gray-600 mb-4 text-sm">{tour.destinationsCovered.join(', ')}</p>
          <p className="text-lg font-semibold text-accent">₹{tour.price.toLocaleString('en-IN')} <span className="text-sm font-normal text-gray-500">/ person</span></p>
        </div>
      </Link>
    </div>
  );
};

export default TourPackageCard;