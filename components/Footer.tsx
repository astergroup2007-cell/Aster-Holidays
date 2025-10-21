import React from 'react';
import { Link } from 'react-router-dom';

// --- INLINE SVG ICONS (DUE TO FILE CONSTRAINTS) ---
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
    </svg>
);

const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="footer-contact" className="bg-gradient-to-t from-secondary to-[#003849] text-white mt-auto">
      <div className="container mx-auto px-6 py-12 text-center">
        
        <Link to="/" className="inline-block mb-6">
            <img src="https://i.ibb.co/3mZfxCJx/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-14" />
        </Link>
        
        <p className="max-w-md mx-auto text-gray-400 mb-8">
            Your trusted partner for memorable journeys. Discover, book, and explore the world with us.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-300">
                <YouTubeIcon className="h-6 w-6" />
            </a>
        </div>
        
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8 text-gray-300">
            <Link to="/hotels" className="hover:text-primary transition-colors duration-300">Hotels</Link>
            <Link to="/flights" className="hover:text-primary transition-colors duration-300">Flights</Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors duration-300">Terms & Conditions</Link>
        </div>

        <div className="text-gray-500 pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Aster Holidays.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;