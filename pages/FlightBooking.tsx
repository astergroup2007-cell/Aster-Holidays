import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Flight } from '../types';
import { getFlightById } from '../services/api';

const FlightBooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<Flight | null>(null);

  useEffect(() => {
    if (id) {
      getFlightById(id).then(data => setFlight(data || null));
    }
  }, [id]);

  if (!flight) {
    return <div className="text-center py-20">Loading flight details...</div>;
  }

  const handlePayment = () => {
    alert('This is a demo. Redirecting to Razorpay would happen here for the flight booking.');
  };
  
  const tax = (flight.price * 0.18).toFixed(2);
  const total = (flight.price * 1.18).toFixed(2);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Confirm Your Flight Booking</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Flight Summary</h2>
          <div className="flex items-center border-b pb-6 mb-6">
            <img src={flight.airlineLogo} alt={flight.airline} className="w-24 h-24 p-2 border rounded-md" />
            <div className="ml-6">
              <h3 className="text-xl font-bold">{flight.airline}</h3>
              <p className="text-gray-600">{flight.origin} to {flight.destination}</p>
               <p className="text-gray-500 text-sm">Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}</p>
            </div>
          </div>
          <div className="space-y-4">
             <div className="flex justify-between">
                <span className="text-gray-600">Base Fare:</span>
                <span className="font-semibold">${flight.price.toFixed(2)}</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-600">Passengers:</span>
                <span className="font-semibold">1</span>
             </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes & Fees:</span>
                <span className="font-semibold">${tax}</span>
             </div>
             <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
                <span>Total:</span>
                <span>${total}</span>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg h-fit">
           <h2 className="text-2xl font-semibold mb-6">Payment</h2>
           <p className="text-gray-600 mb-6">Click the button below to proceed with a secure payment via Razorpay.</p>
           <button 
             onClick={handlePayment} 
             className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
           >
             <img src="https://razorpay.com/favicon.ico" alt="Razorpay" className="w-6 h-6 mr-2" />
             Pay with Razorpay
           </button>
           <p className="text-xs text-gray-500 mt-4 text-center">
             By clicking "Pay", you agree to our <Link to="/terms-and-conditions" className="text-blue-600 underline">Terms & Conditions</Link>.
           </p>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
