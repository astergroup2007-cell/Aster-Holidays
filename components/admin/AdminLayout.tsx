import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const authContext = useContext(AdminAuthContext);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2 mt-2 text-gray-100 transition-colors duration-200 transform rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 px-4 py-6 overflow-y-auto bg-gray-800 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
        <div className="flex items-center justify-between">
            <Link to="/">
                <img src="https://i.ibb.co/s9NKvg1W/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12 bg-white p-2 rounded" />
            </Link>
             <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <nav className="mt-10">
          <NavLink to="/admin" end className={navLinkClasses}>Dashboard</NavLink>
          <NavLink to="/admin/tours" className={navLinkClasses}>Tours</NavLink>
          <NavLink to="/admin/hotels" className={navLinkClasses}>Hotels</NavLink>
          <NavLink to="/admin/bookings" className={navLinkClasses}>Bookings</NavLink>
          <NavLink to="/admin/settings" className={navLinkClasses}>Settings</NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-primary">
            <div className="flex items-center">
                <button className="text-gray-500 focus:outline-none md:hidden" onClick={() => setIsSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                 <h1 className="text-2xl font-semibold text-gray-800 ml-4">Admin Panel</h1>
            </div>

            <div className="flex items-center">
                <button onClick={authContext?.logout} className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-opacity-90">
                    Logout
                </button>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;