import React from 'react';
import SearchForm from '../components/SearchForm';
import { Link } from 'react-router-dom';
import { hotels } from '../data/mockData';
import HotelCard from '../components/HotelCard';

const Home: React.FC = () => {
  const featuredHotels = hotels.slice(0, 3);

  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-96 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/4782879/4782879-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Find Your Next Stay</h1>
            <p className="text-xl">Search deals on hotels, homes, and much more...</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="container mx-auto px-6">
        <SearchForm />
      </div>

      {/* Featured Hotels Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/hotels" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
            View All Hotels
          </Link>
        </div>
      </div>

       {/* Why Choose Us Section */}
       <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Book With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Find the best deals on hotels and flights, backed by our price match promise.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">Our team is always here to help you with any questions or issues.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Secure Bookings</h3>
              <p className="text-gray-600">We use secure payment gateways to protect your information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
