import React from 'react';
import SearchForm from '../components/SearchForm';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('https://picsum.photos/1600/500?random=42')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4">Find Your Perfect Getaway</h1>
          <p className="text-xl text-white mb-8">Discover and book amazing hotels and flights at the best prices.</p>
        </div>
      </div>

      {/* Search Form Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <SearchForm />
      </div>

      {/* Featured Destinations Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
            <img src="https://picsum.photos/400/500?random=1" alt="Goa" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Goa</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
            <img src="https://picsum.photos/400/500?random=2" alt="Manali" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Manali</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
            <img src="https://picsum.photos/400/500?random=3" alt="Jaipur" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Jaipur</h3>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
            <img src="https://picsum.photos/400/500?random=4" alt="Kerala" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-2xl font-bold">Kerala</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
