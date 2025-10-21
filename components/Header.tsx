import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Aster Holidays
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}>Hotels</NavLink>
          <NavLink to="/flights" className={({ isActive }) => isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}>Flights</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          {authContext?.user ? (
            <>
              <span className="text-gray-700">Welcome, {authContext.user.name}</span>
              <button onClick={authContext.logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
