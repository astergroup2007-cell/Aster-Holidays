import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminDashboard: React.FC = () => {
  const { admin } = useContext(AdminAuthContext)!;

  // Mock data for dashboard widgets
  const stats = [
    { title: 'Total Tours', value: 4, link: '/admin/tours', icon: '✈️' },
    { title: 'Total Hotels', value: 2, link: '/admin/hotels', icon: '🏨' },
    { title: 'Pending Bookings', value: 1, link: '/admin/bookings', icon: '📅' },
    { title: 'Revenue (This Month)', value: '₹1,25,000', link: '#', icon: '💰' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {admin?.email.split('@')[0]}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="text-3xl mr-4">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/admin/tours" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
            Manage Tours
          </Link>
          <Link to="/admin/hotels" className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Manage Hotels
          </Link>
           <Link to="/admin/bookings" className="bg-accent text-secondary px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors">
            View Bookings
          </Link>
          <Link to="/admin/settings" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
