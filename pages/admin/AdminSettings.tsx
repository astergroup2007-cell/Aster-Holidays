import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminSettings: React.FC = () => {
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
                    <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-primary/50">Dashboard</Link>
                    <Link to="/admin/manage-tours" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-primary/50">Manage Tours</Link>
                    <Link to="/admin/settings" className="block py-2.5 px-4 rounded transition duration-200 bg-primary/80">Settings</Link>
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
                    <h1 className="text-2xl font-semibold text-gray-800">Admin Settings</h1>
                    <div className="flex items-center space-x-2">
                        <span>Welcome, {authContext?.admin?.username}</span>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="container mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Change Password</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Current Password</label>
                                    <input type="password" className="w-full p-2 border rounded mt-1" placeholder="Enter current password" disabled />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">New Password</label>
                                    <input type="password" className="w-full p-2 border rounded mt-1" placeholder="Enter new password" disabled />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Confirm New Password</label>
                                    <input type="password" className="w-full p-2 border rounded mt-1" placeholder="Confirm new password" disabled />
                                </div>
                                <button type="submit" className="bg-primary text-white px-4 py-2 rounded disabled:bg-gray-400" disabled>Save Changes</button>
                                <p className="text-sm text-gray-500 mt-2">This feature is not yet implemented.</p>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminSettings;
