import React from 'react';
import type { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={flight.airlineLogo} alt={`${flight.airline} logo`} className="h-12 w-24 object-contain mr-6" />
          <div>
            <div className="font-bold text-lg text-gray-800">{flight.departureTime} &rarr; {flight.arrivalTime}</div>
            <div className="text-sm text-gray-500">{flight.airline}</div>
          </div>
        </div>
        
        <div className="text-center mb-4 md:mb-0">
          <div className="font-semibold text-gray-800">{flight.duration}</div>
          <div className="text-sm text-gray-500">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}</div>
        </div>
        
        <div className="flex flex-col items-center md:flex-row md:items-center">
            <div className="text-center md:text-right md:mr-6">
                <div className="text-2xl font-bold text-blue-600">${flight.price}</div>
                <div className="text-sm text-gray-500">per person</div>
            </div>
            <button className="mt-4 md:mt-0 w-full md:w-auto bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;