import React, { useState, useEffect } from 'react';
import type { Flight } from '../types';
import { getFlights } from '../services/api';
import FlightCard from '../components/FlightCard';

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      const data = await getFlights();
      setFlights(data);
      setLoading(false);
    };
    fetchFlights();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-semibold text-gray-700">Finding the best flights for you...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Flight Search Results</h1>
      <p className="text-gray-600 mb-8">Showing results for Delhi (DEL) to Mumbai (BOM)</p>
      <div className="space-y-6">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightList;