import React from 'react';
import { Link } from 'react-router-dom';
import type { Hotel } from '../types';
import StarIcon from './icons/StarIcon';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
      <Link to={`/hotel/${hotel.id}`}>
        <img className="w-full h-56 object-cover" src={hotel.images[0]} alt={hotel.name} />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold font-heading text-secondary mb-2 group-hover:text-primary">{hotel.name}</h3>
            <div className="flex items-center bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
              <StarIcon className="w-4 h-4 mr-1 text-yellow-300" />
              <span>{hotel.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{hotel.location}</p>
          <p className="text-lg font-semibold text-accent">₹{hotel.pricePerNight.toLocaleString('en-IN')} <span className="text-sm font-normal text-gray-500">/ night</span></p>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;