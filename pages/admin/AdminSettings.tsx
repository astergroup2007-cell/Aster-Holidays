import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminSettings: React.FC = () => {
    const authContext = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleLogout = () => {
        authContext?.logout();
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        if (newPassword !== confirmPassword) {
            setMessage({ type: 'error', text: "New passwords do not match." });
            return;
        }
        if (!authContext) {
            setMessage({ type: 'error', text: "Authentication service not available." });
            return;
        }

        const error = await authContext.changePassword(currentPassword, newPassword);
        if (error) {
            setMessage({ type: 'error', text: error });
        } else {
            setMessage({ type: 'success', text: "Password changed successfully!" });
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

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
                        <span>Welcome, {authContext?.admin?.email}</span>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <div className="container mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                            <h2 className="text-xl font-bold mb-6 text-secondary">Change Password</h2>
                            
                            {message && (
                                <div className={`p-3 rounded mb-4 text-sm ${
                                    message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                    {message.text}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">Current Password</label>
                                    <input 
                                        type="password" 
                                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent" 
                                        placeholder="Enter current password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">New Password</label>
                                    <input 
                                        type="password" 
                                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent" 
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Confirm New Password</label>
                                    <input 
                                        type="password" 
                                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-accent" 
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className="w-full bg-primary text-white font-bold px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminSettings;