import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { TourPackage } from '../types';
import { getTourPackageById } from '../services/api';

const TourPackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<TourPackage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchTour = async () => {
      if (!id) return;
      setLoading(true);
      const data = await getTourPackageById(id);
      if (data) {
        setTour(data);
      }
      setLoading(false);
    };
    fetchTour();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Tour Package Not Found</h2>
        <Link to="/hotels" className="text-primary hover:underline">Return to Packages</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Mobile-friendly Banner */}
      <div className="relative h-64 md:h-[450px]">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-6 text-white">
          <div className="container mx-auto">
             <div className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                {tour.duration}
             </div>
             <h1 className="text-3xl md:text-5xl font-bold font-heading mb-2">{tour.name}</h1>
             <p className="text-white/80 font-medium text-sm md:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                {tour.destinationsCovered.join(' • ')}
             </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-6 border-b-2 border-primary/20 pb-2 inline-block">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-2xl border border-gray-100">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                             <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </div>
                          <span className="text-secondary font-medium text-sm md:text-base">{highlight}</span>
                      </div>
                  ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-6 border-b-2 border-primary/20 pb-2 inline-block">About this Tour</h2>
              <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed">
                <p>
                  Embark on an unforgettable journey with our "{tour.name}" package. This tour is perfectly crafted for travelers seeking a blend of adventure, culture, and relaxation. Explore iconic landmarks, savor local cuisines, and create memories that will last a lifetime. Our expert guides and seamless arrangements ensure you have a comfortable and enriching experience.
                </p>
                <p>
                  Our package includes comfortable accommodation, private transfers, and experienced local guides who know the terrain of {tour.destinationsCovered[0]} like the back of their hands. We prioritize your safety and comfort while ensuring you get the most authentic Himalayan experience.
                </p>
              </div>
            </section>
          </div>
          
          {/* Booking Sidebar - Floats on Desktop, In-flow on Mobile */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 lg:sticky lg:top-28">
              <div className="mb-6">
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Starting Price</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-secondary">₹{tour.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500 font-medium">/ person</span>
                 </div>
                 <p className="text-xs text-gray-400 mt-2 font-medium italic">Tax and services included. Subject to availability.</p>
              </div>

              <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm font-bold text-secondary">{tour.duration}</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span className="text-sm font-bold text-secondary">Secure Booking</span>
                 </div>
              </div>

              <Link to={`/booking/${tour.id}`} className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-orange-600 hover:-translate-y-1 transform transition-all text-center block active:scale-95 text-lg">
                Book This Trip
              </Link>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.505 5.505l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  Need Customization?
                </h4>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">Our experts can tailor this itinerary specifically for your needs and budget.</p>
                <a href="tel:+917047514663" className="text-lg font-bold text-primary hover:underline">+91 7047514663</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageDetails;