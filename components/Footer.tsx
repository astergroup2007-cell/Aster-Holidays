import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Aster Holidays</h3>
            <p className="text-gray-400">Your one-stop travel partner.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</Link>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Aster Holidays.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
