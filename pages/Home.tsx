
import React from 'react';
import SearchForm from '../components/SearchForm';

const Home: React.FC = () => {
  return (
    <div>
      <section 
        className="h-[500px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('https://picsum.photos/1600/500?grayscale&blur=2')" }}
      >
        <div className="text-center text-white p-4 bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-5xl font-extrabold mb-4">Your Journey Begins Here</h1>
          <p className="text-xl">Discover and book amazing hotels and flights with Aster Holidays.in</p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <SearchForm />
      </div>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Goa', 'Kerala', 'Rajasthan', 'Himachal'].map(dest => (
                 <div key={dest} className="relative rounded-lg overflow-hidden shadow-lg h-80 group">
                    <img src={`https://picsum.photos/400/600?random=${dest}`} alt={dest} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                        <h3 className="text-white text-2xl font-bold">{dest}</h3>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
