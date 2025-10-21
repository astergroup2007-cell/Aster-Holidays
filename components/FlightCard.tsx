import React from 'react';
import type { Flight } from '../types';
import { Link } from 'react-router-dom';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-xl">
      <div className="p-4 md:w-1/5 flex flex-col items-center justify-center">
        <img src={flight.airlineLogo} alt={flight.airline} className="h-12 mb-2" />
        <span className="text-gray-600 text-sm">{flight.airline}</span>
      </div>
      <div className="p-4 flex-grow grid grid-cols-3 md:grid-cols-none md:flex md:justify-around items-center w-full">
        <div className="text-center">
          <p className="text-xl font-bold">{flight.departureTime}</p>
          <p className="text-gray-600">{flight.origin}</p>
        </div>
        <div className="text-center text-gray-500 px-4">
          <p>{flight.duration}</p>
          <div className="w-full h-px bg-gray-300 my-1 relative">
            <div className="absolute right-0 top-1/2 -mt-1 w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
          <p className="text-sm">{flight.stops} stop{flight.stops !== 1 && 's'}</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">{flight.arrivalTime}</p>
          <p className="text-gray-600">{flight.destination}</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l w-full md:w-auto">
        <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
        <Link to={`/flight-booking/${flight.id}`} className="mt-2 w-full md:w-auto text-center bg-blue-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 font-semibold">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;
