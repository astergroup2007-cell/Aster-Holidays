import React from 'react';
import { Link } from 'react-router-dom';

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
    <footer id="footer-contact" className="bg-[#002B36] text-white pt-16 pb-8 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
                <img src="https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6 font-medium">
                Sikkim and North East India’s premier boutique travel agency. Crafting your mountain memories since 2007.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                    <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                    <InstagramIcon className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                    <YouTubeIcon className="h-5 w-5" />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/hotels" className="hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link to="/hotel-aster-gangtok" className="hover:text-primary transition-colors">Our Hotel</Link></li>
              <li><Link to="/articles" className="hover:text-primary transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-heading">Policies</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-policy" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-primary transition-colors">Delivery Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 <span>M.P.Golai, Tadong, Gangtok, Sikkim 737102</span>
              </li>
              <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 <a href="mailto:asterhpolidays2007@gmail.com" className="hover:text-primary transition-colors break-all">asterhpolidays2007@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                 <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 <a href="tel:7047514663" className="hover:text-primary transition-colors font-bold">+91 7047514663</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 pt-8 border-t border-white/5 font-medium text-sm">
          <p>&copy; {new Date().getFullYear()} Aster Holidays.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;