import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const location = useLocation();
  
  const user = authContext?.user;
  const logout = authContext?.logout;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-lg md:text-sm lg:text-base font-semibold transition-all duration-300 ${
      isActive ? 'text-primary' : 'text-secondary hover:text-primary'
    }`;

  const activeIndicator = "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300";

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-[100] border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src="https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png" 
            alt="Aster Holidays Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Home
                {isActive && <div className={activeIndicator} />}
              </>
            )}
          </NavLink>
          <NavLink to="/hotels" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Packages
                {isActive && <div className={activeIndicator} />}
              </>
            )}
          </NavLink>
          <NavLink to="/hotel-aster-gangtok" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Our Hotel
                {isActive && <div className={activeIndicator} />}
              </>
            )}
          </NavLink>
          <NavLink to="/articles" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Blog
                {isActive && <div className={activeIndicator} />}
              </>
            )}
          </NavLink>
        </nav>

        {/* Auth / User desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 font-semibold text-secondary py-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 uppercase">
                  {user.name.charAt(0)}
                </div>
                <span className="max-w-[100px] truncate">{user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 group-hover:opacity-100 transition-all duration-200 invisible group-hover:visible translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login" className="font-semibold text-secondary hover:text-primary transition-colors text-sm">Sign In</Link>
              <Link to="/signup" className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-secondary hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="h-full flex flex-col pt-24 pb-12 px-8 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            <NavLink to="/" className="text-3xl font-bold text-secondary active:text-primary">Home</NavLink>
            <NavLink to="/hotels" className="text-3xl font-bold text-secondary active:text-primary">Packages</NavLink>
            <NavLink to="/hotel-aster-gangtok" className="text-3xl font-bold text-secondary active:text-primary">Our Hotel</NavLink>
            <NavLink to="/articles" className="text-3xl font-bold text-secondary active:text-primary">Blog</NavLink>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-gray-100">
            {user ? (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-secondary">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="w-full bg-red-50 text-red-600 font-bold py-4 rounded-2xl active:bg-red-100 transition-colors"
                >
                  Logout Account
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link to="/login" className="w-full text-center text-xl font-bold py-4 border-2 border-secondary rounded-2xl text-secondary">
                  Sign In
                </Link>
                <Link to="/signup" className="w-full text-center text-xl font-bold py-4 bg-primary text-white rounded-2xl shadow-lg active:scale-95 transition-transform">
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;