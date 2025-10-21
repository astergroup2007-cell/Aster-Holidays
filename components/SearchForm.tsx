import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- INLINE SVG ICONS ---
const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const HotelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const AirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights'>('hotels');
  const navigate = useNavigate();

  // Hotel state
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Flight state
  const [origin, setOrigin] = useState('');
  const [flightDestination, setFlightDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isReturn, setIsReturn] = useState(true);

  const handleHotelSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/hotels');
  };
  
  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/flights');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl w-full">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('hotels')}
          className={`relative py-3 px-6 text-lg font-semibold transition-colors duration-300 ${activeTab === 'hotels' ? 'text-secondary' : 'text-gray-500 hover:text-secondary'}`}
        >
          <span>Hotels</span>
          {activeTab === 'hotels' && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />}
        </button>
        <button 
          onClick={() => setActiveTab('flights')}
          className={`relative py-3 px-6 text-lg font-semibold transition-colors duration-300 ${activeTab === 'flights' ? 'text-secondary' : 'text-gray-500 hover:text-secondary'}`}
        >
          <span>Flights</span>
          {activeTab === 'flights' && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />}
        </button>
      </div>
      
      {/* Hotels Form */}
      {activeTab === 'hotels' && (
        <form onSubmit={handleHotelSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
            <LocationIcon className="absolute left-3 bottom-3 text-gray-400 pointer-events-none" />
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              placeholder="e.g. Goa, Manali..."
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <CalendarIcon className="absolute left-3 bottom-3 text-gray-400 pointer-events-none" />
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <CalendarIcon className="absolute left-3 bottom-3 text-gray-400 pointer-events-none" />
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
              required
            />
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-primary text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-11">
            <HotelIcon />
            <span>Search</span>
          </button>
        </form>
      )}

      {/* Flights Form */}
      {activeTab === 'flights' && (
         <form onSubmit={handleFlightSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                 <LocationIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="Origin"
                    required
                  />
              </div>
              <div className="relative">
                 <LocationIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 <input
                    type="text"
                    value={flightDestination}
                    onChange={(e) => setFlightDestination(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="Destination"
                    required
                  />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                 <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    required
                  />
              </div>
              {isReturn && (
                <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-gray-700 select-none">
                  <input type="checkbox" checked={isReturn} onChange={() => setIsReturn(!isReturn)} className="rounded text-primary focus:ring-primary/50" />
                  <span>Return trip</span>
                </label>
                <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <AirplaneIcon />
                  <span>Search Flights</span>
                </button>
            </div>
        </form>
      )}
    </div>
  );
};

export default SearchForm;