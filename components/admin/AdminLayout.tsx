import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminLayout: React.FC = () => {
  const authContext = useContext(AdminAuthContext);

  const handleLogout = () => {
    if (authContext) {
      authContext.logout();
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 mt-2 text-gray-700 transition-colors duration-200 transform rounded-md ${
      isActive ? 'bg-primary/20 text-primary' : 'hover:bg-gray-200'
    }`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-20 shadow-md">
            <img src="https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12" />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <nav>
            <NavLink to="/admin" end className={navLinkClass}>
              <span className="mx-4 font-medium">Dashboard</span>
            </NavLink>
            <NavLink to="/admin/tours" className={navLinkClass}>
              <span className="mx-4 font-medium">Manage Tours</span>
            </NavLink>
            <NavLink to="/admin/hotels" className={navLinkClass}>
              <span className="mx-4 font-medium">Manage Hotels</span>
            </NavLink>
             <NavLink to="/admin/hotel-bookings" className={navLinkClass}>
              <span className="mx-4 font-medium">Hotel Bookings</span>
            </NavLink>
            <NavLink to="/admin/itineraries" className={navLinkClass}>
              <span className="mx-4 font-medium">Itineraries</span>
            </NavLink>
            <NavLink to="/admin/articles" className={navLinkClass}>
              <span className="mx-4 font-medium">Articles</span>
            </NavLink>
             <NavLink to="/admin/settings" className={navLinkClass}>
              <span className="mx-4 font-medium">Settings</span>
            </NavLink>
          </nav>
          <div className="mt-auto">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 mt-2 text-gray-700 transition-colors duration-200 transform rounded-md hover:bg-red-100 hover:text-red-700"
            >
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex justify-between items-center p-6 bg-white border-b-2">
           <h1 className="text-xl font-semibold">Admin Panel</h1>
           <div className="text-sm">Logged in as: {authContext?.admin?.email}</div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
