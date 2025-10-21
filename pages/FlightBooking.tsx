// FIX: Removed reference to vite/client as it was causing a type definition error. Types are now handled globally in razorpay.d.ts.
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Flight } from '../types';
import { getFlightById } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const FlightBooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.user) {
      setName(authContext.user.name);
      setEmail(authContext.user.email);
    }
  }, [authContext]);

  useEffect(() => {
    const fetchFlight = async () => {
      if (!id) return;
      setLoading(true);
      const data = await getFlightById(id);
      if (data) {
        setFlight(data);
      }
      setLoading(false);
    };
    fetchFlight();
  }, [id]);

  const handlePayment = async () => {
    // --- RAZORPAY INTEGRATION TEMPORARILY DISABLED ---
    // The original payment logic has been commented out to allow for deployment.
    // To re-enable, uncomment the code below and follow the restoration steps.
    alert('Booking successful! (Payment Gateway Disabled)');
    navigate('/flights');

    /*
    if (!flight || !authContext?.user) return;

    try {
      // Step 1: Create an order on the backend
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: flight.price * 100 }), // amount in paise
      });

      if (!response.ok) {
        throw new Error('Failed to create Razorpay order');
      }

      const order = await response.json();

      // Step 2: Open Razorpay checkout
      const options = {
        // FIX: Use environment variable from import.meta.env. The type definition is now in razorpay.d.ts.
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Aster Holidays.in",
        description: `Flight from ${flight.origin} to ${flight.destination}`,
        image: "https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png",
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          navigate('/flights');
        },
        prefill: {
          name: authContext.user.name,
          email: authContext.user.email,
        },
        theme: {
          color: "#F97316"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
    */
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePayment();
  };

  if (loading) {
    return <div className="text-center py-20">Loading flight details...</div>;
  }

  if (!flight) {
    return <div className="text-center py-20">Flight not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-heading mb-8">Confirm Your Flight Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold font-heading mb-4">Flight Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={flight.airlineLogo} alt={flight.airline} className="h-10 w-20 object-contain mr-4" />
              <p className="text-xl font-bold">{flight.airline}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">{flight.departureTime}</p>
                <p className="text-gray-600">{flight.origin}</p>
              </div>
              <div className="text-center">
                 <p className="text-gray-500">{flight.duration}</p>
                 <div className="w-24 h-px bg-gray-300 my-1"></div>
                 <p className="text-xs text-gray-500">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                <p className="text-gray-600">{flight.destination}</p>
              </div>
            </div>
             <p className="text-2xl font-bold text-accent text-right mt-6">Total: ₹{flight.price.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold font-heading mb-6">Passenger Details</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent"
                required
              />
            </div>
            <button type="submit" className="w-full bg-primary font-bold text-white py-3 px-4 rounded-md hover:bg-orange-600">
              Confirm & Book Flight
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">By clicking this button, you agree to our <Link to="/terms-and-conditions" className="text-accent hover:underline">Terms and Conditions</Link>.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;