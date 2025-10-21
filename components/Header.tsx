import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null; // Or some fallback UI
  }

  const { user, logout } = authContext;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/">
          <img src="https://drive.google.com/uc?export=view&id=1jYd_5c5QukwUh739fM8KT1JFuqx9XMVP" alt="Aster Holidays Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
          <Link to="/hotels" className="text-gray-600 hover:text-blue-600 transition duration-300">Hotels</Link>
          <Link to="/flights" className="text-gray-600 hover:text-blue-600 transition duration-300">Flights</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-800 font-medium">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600 font-semibold transition duration-300">
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
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