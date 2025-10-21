import React from 'react';
import { Link } from 'react-router-dom';
import type { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
        <img src={flight.airlineLogo} alt={flight.airline} className="h-10 w-20 object-contain mr-6" />
        <div className="text-left">
          <p className="font-bold text-lg font-heading">{flight.departureTime} &rarr; {flight.arrivalTime}</p>
          <p className="text-sm text-gray-500">{flight.origin} - {flight.destination}</p>
        </div>
      </div>
      <div className="text-center mb-4 md:mb-0 flex-shrink-0">
        <p className="font-semibold">{flight.duration}</p>
        <p className="text-sm text-gray-500">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}</p>
      </div>
      <div className="flex flex-col items-center flex-shrink-0">
        <p className="text-xl font-bold text-accent mb-2">₹{flight.price.toLocaleString('en-IN')}</p>
        <Link to={`/flight-booking/${flight.id}`} className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 text-center">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default FlightCard;