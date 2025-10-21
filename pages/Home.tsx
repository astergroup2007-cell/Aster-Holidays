import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import HotelCard from '../components/HotelCard';
import { getHotels } from '../services/api';
import type { Hotel } from '../types';

const Home: React.FC = () => {
  const [featuredHotels, setFeaturedHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      const allHotels = await getHotels();
      setFeaturedHotels(allHotels.slice(0, 3));
      setLoading(false);
    };
    fetchHotels();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white text-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/3254002/3254002-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 leading-tight">Your Journey Begins Here</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Discover and book flights, hotels, and holiday packages at the best prices.</p>
          <div className="w-full max-w-4xl">
             <SearchForm />
          </div>
        </div>
      </section>

      {/* Video Experience Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-secondary mb-10">
            Experience the Journey Before You Travel
          </h2>
          <div className="max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden">
            <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/20gW6-2atGk?si=iznB0zzG7ZKzpWHA&autoplay=1&mute=1&loop=1&playlist=20gW6-2atGk"
                title="Aster Holidays Travel Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-heading text-center text-secondary mb-10">Popular Destinations</h2>
          {loading ? (
             <div className="text-center">Loading featured hotels...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          )}
           <div className="text-center mt-12">
            <Link to="/hotels" className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300">
              View All Hotels
            </Link>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
       <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-secondary mb-10">Why Choose Aster Holidays?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="text-primary mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.5-6.5s-7 3-7 3a8 8 0 0011.314 11.314z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-secondary mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We offer competitive prices on millions of flights and hotels.</p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-secondary mb-2">Secure Bookings</h3>
              <p className="text-gray-600">Your data is safe with us. We use top-tier security for all transactions.</p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h6l2-2h2l-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading text-secondary mb-2">24/7 Customer Support</h3>
              <p className="text-gray-600">Our team is here to help you around the clock with any questions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;