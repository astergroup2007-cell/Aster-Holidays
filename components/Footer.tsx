import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="footer-contact" className="bg-secondary text-white mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4 md:mb-0">
             <Link to="/">
                <img src="https://i.ibb.co/3mZfxCJx/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-14 mb-4" />
             </Link>
            <p className="text-gray-400">Your trusted partner for memorable journeys.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/hotels" className="hover:text-primary">Hotels</Link></li>
              <li><Link to="/flights" className="hover:text-primary">Flights</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-primary">Cancellation Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-primary">Booking Delivery Policy</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-bold mb-4">Contact Us</h3>
             <p className="text-gray-400">Phone: <a href="tel:+917047514663" className="hover:text-primary">+91 7047514663</a></p>
             <p className="text-gray-400">Email: <a href="mailto:asterhpolidays2007@gmail.com" className="hover:text-primary">asterhpolidays2007@gmail.com</a></p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Aster Holidays.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;