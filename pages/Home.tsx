import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import { destinations, tourPackages, testimonials } from '../data/mockData';
import type { Destination, Testimonial } from '../types';
import TourPackageCard from '../components/HotelCard'; // Repurposed as TourPackageCard

// --- INLINE COMPONENTS (DUE TO FILE CONSTRAINTS) ---

// Floating Icons for Hero Section
const AirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.435 11.109l-8.02-6.526a.502.502 0 00-.415-.083l-1.041.347-4.14-3.411a.502.502 0 00-.736.386v3.785l-4.173-1.42a.502.502 0 00-.547.746l3.5 6.062a.502.502 0 00.468.254h.001l5.908.002 2.158 5.679a.502.502 0 00.95.045l1.83-4.814 4.212 1.43a.5.5 0 00.547-.746l-2.01-3.483a.502.502 0 00-.033-.502z" />
  </svg>
);

const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.555 13.163C19.859 12.58 21.5 10.486 21.5 8c0-2.923-2.221-5.323-5.063-5.48A7.5 7.5 0 004.5 8c0 2.898 1.63 5.42 3.938 6.671a5.502 5.502 0 00-3.42 5.223 1 1 0 001 1.006h14.965a1 1 0 001-1.006c0-2.32-1.39-4.393-3.428-5.225z" />
    </svg>
);

// Map Icon for CTA Banner
const MapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-.553-.894L15 2m-6 5l6-3m0 0l6 3m-6-3v10" />
    </svg>
);

// Destination Card for "Top Destinations" Section
interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[3/4]">
    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold font-heading">{destination.name}</h3>
      <p className="text-sm opacity-90">{destination.tagline}</p>
    </div>
  </div>
);

// Testimonial Card
const TestimonialCard: React.FC<{testimonial: Testimonial}> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full flex flex-col items-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 ring-4 ring-accent p-1"/>
        <p className="text-gray-600 flex-grow">"{testimonial.review}"</p>
        <div className="mt-4">
            <h4 className="font-bold text-secondary text-lg">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.tour}</p>
        </div>
    </div>
);


const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute z-0 top-0 left-0 w-full h-full">
         <iframe 
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/20gW6-2atGk?si=IaKhE_iBngnd-cfZ&autoplay=1&mute=1&loop=1&playlist=20gW6-2atGk&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        
        {/* Floating Animated Icons */}
        <AirplaneIcon className="absolute top-[10%] left-[5%] w-16 h-16 text-white/20 animate-float opacity-0" style={{ animationDelay: '1s' }} />
        <CloudIcon className="absolute top-[20%] right-[10%] w-24 h-24 text-white/20 animate-float-reverse opacity-0" style={{ animationDelay: '2s' }} />
        <AirplaneIcon className="absolute bottom-[15%] right-[5%] w-12 h-12 text-white/10 animate-float-reverse transform -scale-x-100 opacity-0" style={{ animationDelay: '3s' }}/>
        <CloudIcon className="absolute bottom-[25%] left-[15%] w-20 h-20 text-white/10 animate-float opacity-0" style={{ animationDelay: '4s' }} />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center z-20">
          <h1 className="text-4xl md:text-7xl font-extrabold font-heading mb-4 leading-tight opacity-0 animate-fade-in-up">Your Journey Begins Here</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Discover the magic of Sikkim, Darjeeling, Bhutan & Nepal with Siliguri's most trusted travel experts.</p>
          <div className="w-full max-w-4xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <SearchForm />
          </div>
        </div>
      </section>

       {/* Welcome Section */}
       <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Welcome to Aster Holidays</h2>
              <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                  Based in the foothills of the Himalayas in Siliguri, Aster Holidays is your dedicated partner for crafting unforgettable journeys. With deep local knowledge and a passion for travel, we specialize in creating personalized tour packages for Sikkim, Darjeeling, Kalimpong, Bhutan, and Nepal. Our commitment is to provide you with a seamless, authentic, and memorable travel experience from start to finish.
              </p>
          </div>
       </section>

      {/* Top Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-heading text-center text-secondary mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {destinations.slice(0, 6).map((dest, index) => (
               <div key={dest.name} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
                <DestinationCard destination={dest} />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-center text-secondary mb-12">Featured Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tourPackages.slice(0,3).map(tour => (
                    <TourPackageCard key={tour.id} tour={tour} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/hotels" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg text-lg">
                    View All Packages
                </Link>
            </div>
        </div>
      </section>

      {/* Our Hotel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://i.ibb.co/cKSqXWVT/Whats-App-Image-2025-10-21-at-4-23-24-PM-1.jpg" 
                alt="Hotel Aster Gangtok Exterior"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold font-heading text-secondary mb-4">Our Signature Stay in Gangtok</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Experience authentic Sikkimese hospitality at Hotel Aster Gangtok. Located in the prime Tadong area, our hotel offers a perfect blend of comfort and convenience, making it the ideal base for your Himalayan adventures. As part of the Aster Holidays family, we provide a seamless travel experience, combining your stay with expert-led tours across Sikkim.
              </p>
              <Link to="/hotel-aster-gangtok" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg text-lg inline-block">
                Explore The Hotel
              </Link>
            </div>
          </div>
        </div>
      </section>


       {/* Why Choose Us Section */}
       <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-heading text-secondary mb-12">Why Choose Aster Holidays?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="text-primary mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.5-6.5s-7 3-7 3a8 8 0 0011.314 11.314z" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Local Expertise</h3>
              <p className="text-gray-600">Our deep-rooted local knowledge ensures you get the most authentic experience.</p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading text-secondary mb-2">24/7 Support</h3>
              <p className="text-gray-600">We are always available to assist you, ensuring a hassle-free journey.</p>
            </div>
            <div className="p-6">
              <div className="text-primary mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">We offer competitive prices and transparent billing with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-heading text-center text-secondary mb-12">What Our Travelers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map(testimonial => (
                      <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="bg-gradient-to-r from-primary to-accent rounded-xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center text-white">
                  <div className="flex items-center mb-6 md:mb-0">
                      <MapIcon className="w-16 h-16 mr-6 hidden md:block" />
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to Plan Your Next Trip?</h2>
                        <p className="text-lg opacity-90">Let's make your travel dreams a reality.</p>
                      </div>
                  </div>
                  <Link to="/hotels" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg flex-shrink-0">
                      Start Planning Now
                  </Link>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Home;