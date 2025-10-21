import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              className="h-12 w-auto mb-4" 
              src="https://drive.google.com/uc?export=view&id=1jYd_5c5QukwUh739fM8KT1JFuqx9XMVP" 
              alt="Aster Holidays.in logo" 
            />
            <p className="text-gray-400">Your perfect getaway is just a click away. Discover amazing deals on hotels and flights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: <a href="tel:+917047514663" className="hover:text-white">+91 7047514663</a></li>
              <li>Email: <a href="mailto:asterhpolidays2007@gmail.com" className="hover:text-white">asterhpolidays2007@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aster Holidays.in. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;