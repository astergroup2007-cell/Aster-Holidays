import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminDashboard: React.FC = () => {
    const authContext = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (authContext) {
            authContext.logout();
        } else {
            navigate('/admin/login');
        }
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-secondary text-white flex flex-col">
                <div className="p-6">
                    <img src="https://i.ibb.co/3mZfxCJx/Logo-text-with-Sikkim-removed.png" alt="Aster Holidays Logo" className="h-12" />
                </div>
                <nav className="flex-grow p-4">
                    <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 bg-primary/80">Dashboard</Link>
                    <Link to="/admin/manage-tours" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-primary/50">Manage Tours</Link>
                    <Link to="/admin/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-primary/50">Settings</Link>
                </nav>
                <div className="p-4">
                     <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-6 bg-white border-b">
                    <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
                    <div className="flex items-center space-x-2">
                        <span>Welcome, {authContext?.admin?.email}</span>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-secondary">Manage Tours</h3>
                                <p className="text-gray-600 mt-2">Add, edit, or delete tour packages available on the website.</p>
                                <Link to="/admin/manage-tours" className="text-primary hover:underline mt-4 inline-block">Go to Tours &rarr;</Link>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-secondary">Settings</h3>
                                <p className="text-gray-600 mt-2">Configure admin settings, change passwords, and manage site configurations.</p>
                                <Link to="/admin/settings" className="text-primary hover:underline mt-4 inline-block">Go to Settings &rarr;</Link>
                            </div>
                             <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-secondary">View Live Site</h3>
                                <p className="text-gray-600 mt-2">Open the public-facing website in a new tab to see your changes live.</p>
                                <a href="/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-4 inline-block">Open Site &rarr;</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;