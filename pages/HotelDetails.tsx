import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { TourPackage } from '../types';
import { getTourPackageById } from '../services/api';

const TourPackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<TourPackage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    return <div className="text-center py-20">Loading tour details...</div>;
  }

  if (!tour) {
    return <div className="text-center py-20">Tour package not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-heading text-secondary">{tour.name}</h1>
        <p className="text-gray-600 mt-2">{tour.destinationsCovered.join(' • ')}</p>
         <div className="mt-2 inline-block bg-blue-100 text-secondary text-sm font-semibold px-3 py-1 rounded-full">
            {tour.duration}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <img src={tour.image} alt={tour.name} className="w-full h-96 object-cover rounded-lg shadow-md mb-8" />
          <h2 className="text-2xl font-bold font-heading text-secondary mb-4">Tour Highlights</h2>
           <ul className="list-disc list-inside space-y-2 text-gray-700">
                {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
          
          <h2 className="text-2xl font-bold font-heading text-secondary mt-8 mb-4">About this Tour</h2>
          <p className="text-gray-700 leading-relaxed">
            Embark on an unforgettable journey with our "{tour.name}" package. This tour is perfectly crafted for travelers seeking a blend of adventure, culture, and relaxation. Explore iconic landmarks, savor local cuisines, and create memories that will last a lifetime. Our expert guides and seamless arrangements ensure you have a comfortable and enriching experience.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-28">
          <p className="text-2xl font-bold text-accent">₹{tour.price.toLocaleString('en-IN')} <span className="text-base font-normal text-gray-500">/ person</span></p>
           <p className="text-sm text-gray-500 mt-1">Starting price. Taxes extra.</p>
          <Link to={`/booking/${tour.id}`} className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 text-center block">
            Book Now
          </Link>
           <div className="mt-6 text-sm text-gray-600">
                <h4 className="font-bold text-secondary mb-2">Need Help?</h4>
                <p>Contact us for customizations and queries.</p>
                <a href="tel:+917047514663" className="text-primary font-semibold hover:underline">+91 7047514663</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageDetails;