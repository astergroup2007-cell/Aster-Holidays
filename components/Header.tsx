import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  
  const user = authContext?.user;
  const logout = authContext?.logout;

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`;

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/hotels" className={navLinkClass}>Packages</NavLink>
          <NavLink to="/flights" className={navLinkClass}>Flights</NavLink>
          <NavLink to="/hotel-aster-gangtok" className={navLinkClass}>Our Hotel</NavLink>
          <NavLink to="/articles" className={navLinkClass}>Blog</NavLink>
        </nav>

        {/* Auth buttons / User info */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 font-semibold text-secondary">
                <span>{user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="font-semibold text-secondary hover:text-primary transition-colors">Sign In</Link>
              <Link to="/signup" className="bg-primary text-white font-bold py-2 px-5 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md absolute w-full shadow-lg animate-slide-down">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/hotels" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Packages</NavLink>
            <NavLink to="/flights" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Flights</NavLink>
            <NavLink to="/hotel-aster-gangtok" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Our Hotel</NavLink>
            <NavLink to="/articles" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
            <div className="border-t w-full my-2"></div>
            {user ? (
                <button
                  onClick={() => { logout && logout(); setIsMenuOpen(false); }}
                  className="font-semibold text-red-500 w-full text-center py-2"
                >
                  Logout
                </button>
            ) : (
                <>
                    <Link to="/login" className="font-semibold text-secondary w-full text-center py-2" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                    <Link to="/signup" className="bg-primary text-white font-bold py-2 px-5 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md" onClick={() => setIsMenuOpen(false)}>
                        Sign Up
                    </Link>
                </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;