import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights'>('hotels');
  const [flightType, setFlightType] = useState<'return' | 'one-way'>('return');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'hotels') {
      navigate('/hotels');
    } else {
      navigate('/flights');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl -mt-20 relative z-10 w-full max-w-4xl mx-auto">
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('hotels')}
          className={`py-3 px-6 text-lg font-semibold transition-colors duration-300 ${activeTab === 'hotels' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          Hotels
        </button>
        <button
          onClick={() => setActiveTab('flights')}
          className={`py-3 px-6 text-lg font-semibold transition-colors duration-300 ${activeTab === 'flights' ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          Flights
        </button>
      </div>

      <form onSubmit={handleSearch}>
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
              <input type="text" id="destination" placeholder="e.g. Goa" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Check-in</label>
              <input type="date" id="checkin" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Check-out</label>
              <input type="date" id="checkout" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="col-span-1 md:col-span-3">
               <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
              <input type="number" id="guests" placeholder="2" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="col-span-1">
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 font-semibold">Search</button>
            </div>
          </div>
        )}
        {activeTab === 'flights' && (
           <div>
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center">
                <input type="radio" name="flightType" value="return" checked={flightType === 'return'} onChange={() => setFlightType('return')} className="form-radio text-blue-600" />
                <span className="ml-2 text-gray-700">Return</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="flightType" value="one-way" checked={flightType === 'one-way'} onChange={() => setFlightType('one-way')} className="form-radio text-blue-600" />
                <span className="ml-2 text-gray-700">One-way</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
                <input type="text" id="origin" placeholder="e.g. Delhi" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="flight-destination" className="block text-sm font-medium text-gray-700">Destination</label>
                <input type="text" id="flight-destination" placeholder="e.g. Mumbai" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">Departure</label>
                <input type="date" id="departure-date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="return-date" className="block text-sm font-medium text-gray-700">Return</label>
                <input type="date" id="return-date" disabled={flightType === 'one-way'} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100" />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 font-semibold">Search</button>
              </div>
            </div>
           </div>
        )}
      </form>
    </div>
  );
};

export default SearchForm;