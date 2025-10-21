import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleContactClick = () => {
    const footer = document.getElementById('footer-contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/">
          <img src="https://i.ibb.co/3mZfxCJx/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-[60px]" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-600 hover:text-primary"}>Home</NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-600 hover:text-primary"}>Tour Packages</NavLink>
          <NavLink to="/flights" className={({ isActive }) => isActive ? "text-primary font-semibold border-b-2 border-primary" : "text-gray-600 hover:text-primary"}>Flights</NavLink>
          <button onClick={handleContactClick} className="text-gray-600 hover:text-primary">Contact</button>
        </div>
        <div className="flex items-center space-x-4">
          {authContext?.user ? (
            <>
              <span className="text-secondary font-medium hidden sm:inline">Welcome, {authContext.user.name.split(' ')[0]}</span>
              <button onClick={authContext.logout} className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-secondary font-medium hover:text-primary">Login</Link>
              <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;