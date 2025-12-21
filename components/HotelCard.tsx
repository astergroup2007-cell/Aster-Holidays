import React from 'react';
import { Link } from 'react-router-dom';
import type { TourPackage } from '../types';

interface TourPackageCardProps {
  tour: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
      <Link to={`/hotel/${tour.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            src={tour.image} 
            alt={tour.name} 
          />
          <div className="absolute top-4 left-4">
             <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {tour.category}
             </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="bg-primary text-white px-4 py-2 text-xs font-bold rounded-xl shadow-lg shadow-primary/20">
              {tour.duration}
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-1">{tour.name}</h3>
          <p className="text-gray-500 mb-6 text-sm flex items-center gap-2 font-medium">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
             {tour.destinationsCovered.join(', ')}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <div>
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Starting from</p>
               <p className="text-2xl font-bold text-secondary">₹{tour.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center group-hover:bg-primary transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourPackageCard;