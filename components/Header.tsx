import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null; // or a fallback UI
  }

  const { user, logout } = authContext;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img 
            className="h-12 w-auto" 
            src="https://drive.google.com/uc?export=view&id=1jYd_5c5QukwUh739fM8KT1JFuqx9XMVP" 
            alt="Aster Holidays.in logo" 
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-gray-600 hover:text-blue-600 transition duration-300 ${isActive ? 'font-semibold text-blue-600' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/hotels" 
            className={({ isActive }) => `text-gray-600 hover:text-blue-600 transition duration-300 ${isActive ? 'font-semibold text-blue-600' : ''}`}
          >
            Hotels
          </NavLink>
          <NavLink 
            to="/flights" 
            className={({ isActive }) => `text-gray-600 hover:text-blue-600 transition duration-300 ${isActive ? 'font-semibold text-blue-600' : ''}`}
          >
            Flights
          </NavLink>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-700 hidden sm:inline">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600 transition duration-300 font-semibold">
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;