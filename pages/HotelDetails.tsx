import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Hotel } from '../types';
import { Amenity } from '../types';
import { getHotelById } from '../services/api';
import StarIcon from '../components/icons/StarIcon';
import WifiIcon from '../components/icons/WifiIcon';
import PoolIcon from '../components/icons/PoolIcon';
import ParkingIcon from '../components/icons/ParkingIcon';
import RestaurantIcon from '../components/icons/RestaurantIcon';

const PetFriendlyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55-4.55a2.12 2.12 0 00-3-3L12 7l-4.55-4.55a2.12 2.12 0 00-3 3L9 10m0 0v4.55a2.12 2.12 0 003 3L12 13l4.55 4.55a2.12 2.12 0 003-3V10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.88a9.88 9.88 0 006-2.68 9.88 9.88 0 00-12 0 9.88 9.88 0 006 2.68z" />
    </svg>
); 

const GymIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2M5 12a2 2 0 002 2h10a2 2 0 002-2" />
    </svg>
); 

const amenityIcons: { [key in Amenity]: React.ReactNode } = {
  [Amenity.Wifi]: <WifiIcon />,
  [Amenity.Pool]: <PoolIcon />,
  [Amenity.Parking]: <ParkingIcon />,
  [Amenity.Restaurant]: <RestaurantIcon />,
  [Amenity.PetFriendly]: <PetFriendlyIcon />,
  [Amenity.Gym]: <GymIcon />,
};

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="text-center py-20">Loading hotel details...</div>;
  }

  if (!hotel) {
    return <div className="text-center py-20">Hotel not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{hotel.name}</h1>
        <p className="text-gray-600 mt-2">{hotel.location}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
            <StarIcon className="w-4 h-4 mr-1 text-yellow-300" />
            <span>{hotel.rating}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img src={hotel.images[0]} alt={hotel.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
        <div className="grid grid-cols-2 gap-4">
          {hotel.images.slice(1, 5).map((img, index) => (
            <img key={index} src={img} alt={`${hotel.name} view ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">About this hotel</h2>
          <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hotel.amenities.map(amenity => (
              <div key={amenity} className="flex items-center space-x-3">
                <span className="text-blue-600">{amenityIcons[amenity]}</span>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
          <p className="text-2xl font-bold text-gray-900">${hotel.pricePerNight} <span className="text-base font-normal text-gray-500">/ night</span></p>
          <Link to={`/booking/${hotel.id}`} className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 text-center block">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
