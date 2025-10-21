import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[550px] flex items-center justify-center text-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
            <source src="https://drive.google.com/uc?id=1XyKfbMx9lSsgCwn0dbSpjpx3KLIGSlFk" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-4 leading-tight">Your Journey Begins Here</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">Discover and book amazing hotels & flights in ₹. Tailor-made Indian & international holiday packages.</p>
        </div>
      </div>

      {/* Search Form Section */}
      <div className="container mx-auto px-6 -mt-20 md:-mt-16 relative z-20">
        <SearchForm />
      </div>

      {/* Featured Destinations Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold font-heading text-center mb-10 text-secondary">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Goa', img: 'https://picsum.photos/400/500?random=1' },
            { name: 'Manali', img: 'https://picsum.photos/400/500?random=2' },
            { name: 'Jaipur', img: 'https://picsum.photos/400/500?random=3' },
            { name: 'Kerala', img: 'https://picsum.photos/400/500?random=4' },
          ].map(dest => (
            <Link to="/hotels" key={dest.name} className="relative rounded-lg overflow-hidden shadow-lg h-80 group">
              <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white text-2xl font-bold font-heading">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/hotels" className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors">
                View All Hotels
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;