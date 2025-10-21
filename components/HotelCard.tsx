
import React from 'react';
import { Link } from 'react-router-dom';
import type { Hotel } from '../types';
import StarIcon from './icons/StarIcon';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <Link to={`/hotel/${hotel.id}`} className="block">
        <img className="w-full h-56 object-cover" src={hotel.images[0]} alt={hotel.name} />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{hotel.name}</h3>
          <p className="text-gray-600 mb-4">{hotel.location}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-gray-600">{hotel.rating.toFixed(1)}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-blue-600">${hotel.pricePerNight}</span>
              <span className="text-sm text-gray-500">/night</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
