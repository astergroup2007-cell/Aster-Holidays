import React from 'react';
import { Link } from 'react-router-dom';
import { tourPackages } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  // This is a simplified way to get user count for demo purposes.
  // In a real app, this would come from an API.
  const getUserCount = () => {
    try {
      const storedUsers = localStorage.getItem('users');
      return storedUsers ? JSON.parse(storedUsers).length : 0;
    } catch {
      return 0;
    }
  };
  
  const tourCount = tourPackages.length;
  const userCount = getUserCount();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-secondary">Total Tour Packages</h2>
          <p className="text-4xl font-bold mt-2 text-primary">{tourCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-secondary">Registered Users</h2>
          <p className="text-4xl font-bold mt-2 text-primary">{userCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-secondary">Quick Links</h2>
          <div className="mt-4 space-y-2">
            <Link to="/admin/tours" className="block text-primary hover:underline">Manage Tours</Link>
            <Link to="/admin/settings" className="block text-primary hover:underline">Account Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
