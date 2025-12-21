import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { destinations, tourPackages, testimonials } from '../data/mockData';
import type { Destination, Testimonial } from '../types';
import TourPackageCard from '../components/HotelCard';

// --- INLINE COMPONENTS ---

const AirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.435 11.109l-8.02-6.526a.502.502 0 00-.415-.083l-1.041.347-4.14-3.411a.502.502 0 00-.736.386v3.785l-4.173-1.42a.502.502 0 00-.547.746l3.5 6.062a.502.502 0 00.468.254h.001l5.908.002 2.158 5.679a.502.502 0 00.95.045l1.83-4.814 4.212 1.43a.5.5 0 00.547-.746l-2.01-3.483a.502.502 0 00-.033-.502z" />
  </svg>
);

const MapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-.553-.894L15 2m-6 5l6-3m0 0l6 3m-6-3v10" />
    </svg>
);

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => (
  <div className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer aspect-[4/5] md:aspect-[3/4]">
    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white w-full">
      <h3 className="text-xl md:text-2xl font-bold font-heading mb-1">{destination.name}</h3>
      <p className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-widest">{destination.tagline}</p>
    </div>
  </div>
);

const TestimonialCard: React.FC<{testimonial: Testimonial}> = ({ testimonial }) => (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
        <div className="flex items-center gap-4 mb-6">
            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full ring-2 ring-primary/20 object-cover"/>
            <div className="text-left">
                <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                <div className="flex text-yellow-400 text-xs">
                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                </div>
            </div>
        </div>
        <p className="text-gray-600 italic leading-relaxed mb-6 flex-grow">"{testimonial.review}"</p>
        <p className="text-xs font-bold text-primary uppercase tracking-widest border-t border-gray-100 pt-4">{testimonial.tour}</p>
    </div>
);


const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center text-white overflow-hidden pt-20 pb-12">
        <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
         <iframe 
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 scale-110 md:scale-100"
            src="https://www.youtube.com/embed/20gW6-2atGk?si=IaKhE_iBngnd-cfZ&autoplay=1&mute=1&loop=1&playlist=20gW6-2atGk&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
            title="Hero Video" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
          ></iframe>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/100 z-10"></div>
        
        <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center z-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fade-in-up">
            <AirplaneIcon className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Trusted Travel Experts</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold font-heading mb-6 leading-[1.1] animate-fade-in-up text-balance max-w-4xl">
            Experience the Majesty of the <span className="text-primary italic">Himalayas</span>
          </h1>
          <p className="text-base md:text-xl mb-10 max-w-2xl opacity-0 animate-fade-in-up font-medium text-white/90 leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Discover Sikkim, Darjeeling, Bhutan & Nepal with the region's most personalized tour experience.
          </p>
          <div className="w-full max-w-4xl opacity-0 animate-fade-in-up px-2 md:px-0" style={{ animationDelay: '0.6s' }}>
             <SearchForm />
          </div>
        </div>
      </section>

       {/* Welcome Section */}
       <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">About Aster Holidays</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-8 text-balance">Authentic Journeys Crafted with Care</h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Based in the foothills of the Himalayas in Siliguri, Aster Holidays is your dedicated partner for crafting unforgettable memories.
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                   We specialize in creating personalized tour packages for Sikkim, Darjeeling, Kalimpong, Bhutan, and Nepal. Our deep-rooted local expertise ensures every trip is more than just a tour—it's an immersion into the soul of the mountains.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
                 {[
                   { label: 'Happy Clients', value: '10k+' },
                   { label: 'Tour Packages', value: '150+' },
                   { label: 'Expert Guides', value: '45+' },
                   { label: 'Destinations', value: '12+' },
                 ].map(stat => (
                   <div key={stat.label} className="text-center p-4">
                     <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   </div>
                 ))}
              </div>
          </div>
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
       </section>

      {/* Top Destinations Section */}
      <section className="py-24 bg-white rounded-[3rem] md:rounded-[5rem]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-left">
               <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Explorer's Guide</span>
               <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary">Discover Popular Regions</h2>
            </div>
            <Link to="/hotels" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2">
              Explore All <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {destinations.slice(0, 6).map((dest, index) => (
               <div key={dest.name} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <DestinationCard destination={dest} />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Our Handpicked</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary">Featured Adventures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {tourPackages.slice(0,3).map(tour => (
                    <TourPackageCard key={tour.id} tour={tour} />
                ))}
            </div>
            <div className="text-center mt-16">
                <Link to="/hotels" className="group relative inline-flex items-center gap-3 bg-secondary text-white font-bold py-5 px-12 rounded-full hover:bg-opacity-95 transition-all duration-300 shadow-xl text-lg hover:-translate-y-1">
                    <span>View Full Catalog</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>
        </div>
      </section>

      {/* Our Hotel Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] transform rotate-3 scale-95 transition-transform group-hover:rotate-0"></div>
              <img 
                src="https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg" 
                alt="Hotel Aster Gangtok"
                className="rounded-[2rem] shadow-2xl w-full h-[400px] md:h-[550px] object-cover relative z-10"
              />
              <div className="absolute bottom-8 right-8 z-20 bg-white p-4 rounded-2xl shadow-xl hidden md:block animate-bounce">
                 <div className="flex items-center gap-2 text-primary">
                    <span className="font-bold text-lg">4.8</span>
                    <div className="flex text-sm">★★★★★</div>
                 </div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Guest Rating</p>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Luxury & Comfort</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6 leading-tight">Hotel Aster Gangtok: Your Signature Stay</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Experience authentic Sikkimese hospitality at Hotel Aster Gangtok. Located in prime Tadong, our signature hotel offers a perfect blend of modern comfort and mountain charm. 
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10 text-left">
                {['Mountain Views', 'Fine Dining', 'Local Tours', '24/7 Support'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-secondary">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/hotel-aster-gangtok" className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-primary/20 text-lg inline-flex items-center gap-3">
                Explore The Hotel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Traveler Voices</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary">Stories Worth Sharing</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map(testimonial => (
                      <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-24 px-4 md:px-0">
          <div className="container mx-auto">
              <div className="bg-secondary rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
                  <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between items-center text-white relative z-10 gap-10">
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">Ready to Plan Your <br className="hidden md:block" /> Next Great Adventure?</h2>
                        <p className="text-lg text-white/70 max-w-lg">Let our experts design the perfect itinerary tailored just for you. Your Himalayan journey is one call away.</p>
                      </div>
                      <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link to="/hotels" className="bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-xl text-lg text-center active:scale-95">
                            Start Booking Now
                        </Link>
                        <a href="tel:7047514663" className="text-white/80 hover:text-white font-bold flex items-center justify-center gap-2 py-2">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                           +91 7047514663
                        </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;