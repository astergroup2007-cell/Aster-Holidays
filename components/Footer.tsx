import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aster Holidays</h3>
            <p className="text-gray-400">Your trusted partner for memorable journeys. Book flights and hotels with ease.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/hotels" className="text-gray-400 hover:text-white">Hotels</Link></li>
              <li><Link to="/flights" className="text-gray-400 hover:text-white">Flights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aster Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
