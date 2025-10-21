import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminLayout: React.FC = () => {
  const authContext = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (authContext) {
      authContext.logout();
      navigate('/admin/login');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-white flex flex-col">
        <div className="p-6 text-center border-b border-gray-700">
           <img src="https://i.ibb.co/3mZfxCJx/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12 mx-auto bg-white p-2 rounded-md" />
          <h2 className="mt-4 text-xl font-semibold">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink to="/admin" end className={({ isActive }) => `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary' : 'hover:bg-gray-700'}`}>Dashboard</NavLink>
          <NavLink to="/admin/tours" className={({ isActive }) => `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary' : 'hover:bg-gray-700'}`}>Manage Tours</NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => `block px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary' : 'hover:bg-gray-700'}`}>Settings</NavLink>
        </nav>
        <div className="p-4 border-t border-gray-700">
           <p className="text-sm text-center text-gray-400">Logged in as {authContext?.admin?.email}</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md p-4 flex justify-end items-center">
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
