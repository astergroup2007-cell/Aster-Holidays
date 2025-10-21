
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

const AmenityIconMap: Record<Amenity, React.ReactElement> = {
  [Amenity.Wifi]: <WifiIcon className="w-6 h-6 text-blue-500" />,
  [Amenity.Pool]: <PoolIcon className="w-6 h-6 text-blue-500" />,
  [Amenity.Parking]: <ParkingIcon className="w-6 h-6 text-blue-500" />,
  [Amenity.Restaurant]: <RestaurantIcon className="w-6 h-6 text-blue-500" />,
  [Amenity.PetFriendly]: <span className="text-2xl">🐾</span>,
  [Amenity.Gym]: <span className="text-2xl">🏋️</span>,
};

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      if (id) {
        setLoading(true);
        const data = await getHotelById(id);
        setHotel(data);
        setLoading(false);
      }
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
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
                 <img src={hotel.images[0]} alt={hotel.name} className="w-full h-96 object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-1 lg:col-span-1">
                <img src={hotel.images[1]} alt={hotel.name} className="w-full h-48 object-cover"/>
                <img src={hotel.images[2]} alt={hotel.name} className="w-full h-48 object-cover"/>
                <img src={hotel.images[3]} alt={hotel.name} className="w-full h-48 object-cover"/>
                 <div className="relative w-full h-48">
                    <img src={hotel.images[4]} alt={hotel.name} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">+5 more</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">{hotel.name}</h1>
                    <p className="text-lg text-gray-600 mt-2">{hotel.location}</p>
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className={`w-6 h-6 ${i < Math.round(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                        <span className="ml-2 text-gray-600 text-lg">{hotel.rating.toFixed(1)}</span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                    <p className="text-3xl font-bold text-blue-600">${hotel.pricePerNight}<span className="text-lg font-normal text-gray-500">/night</span></p>
                    <Link to={`/booking/${hotel.id}`}>
                        <button className="mt-4 w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Book Now</button>
                    </Link>
                </div>
            </div>

            <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">About this hotel</h2>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {hotel.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center space-x-3">
                            {AmenityIconMap[amenity]}
                            <span className="text-gray-700">{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
