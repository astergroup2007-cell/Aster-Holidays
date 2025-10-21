import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const adminAuthContext = useContext(AdminAuthContext);

  const handleLogout = () => {
    adminAuthContext?.logout();
    navigate('/admin/login');
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-200px)] p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-secondary">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/admin/tours"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
          >
            <h2 className="text-2xl font-semibold text-secondary">Manage Tour Packages</h2>
            <p className="text-gray-600 mt-2">Add, edit, or delete tour packages.</p>
          </Link>
          {/* Add more management links here in the future */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
