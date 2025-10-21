import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <div className="flex border-b mb-6">
        <button 
          onClick={() => setActiveTab('hotels')}
          className={`py-2 px-6 font-semibold ${activeTab === 'hotels' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
        >
          Hotels
        </button>
        <button 
          onClick={() => setActiveTab('flights')}
          className={`py-2 px-6 font-semibold ${activeTab === 'flights' ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
        >
          Flights
        </button>
      </div>
      
      {activeTab === 'hotels' && (
        <form onSubmit={handleHotelSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              placeholder="e.g. Goa"
              required
            />
          </div>
          <div>
            <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-in</label>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-out</label>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent h-10">
            Search
          </button>
        </form>
      )}

      {activeTab === 'flights' && (
         <form onSubmit={handleFlightSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                placeholder="Origin"
                required
              />
              <input
                type="text"
                value={flightDestination}
                onChange={(e) => setFlightDestination(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                placeholder="Destination"
                required
              />
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  required
                />
              {isReturn && (
                 <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  />
              )}
           </div>
           <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={isReturn} onChange={() => setIsReturn(!isReturn)} className="rounded text-primary focus:ring-accent" />
                <span>Return trip</span>
              </label>
              <button type="submit" className="bg-primary text-white py-2 px-8 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                Search Flights
              </button>
           </div>
        </form>
      )}
    </div>
  );
};

export default SearchForm;