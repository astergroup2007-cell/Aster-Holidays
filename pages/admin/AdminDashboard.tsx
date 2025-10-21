import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTourPackages, getHotelBookings, getHotels } from '../../services/api';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; link: string }> = ({ title, value, icon, link }) => (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
        <div className="bg-primary/10 text-primary rounded-full p-3 mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-secondary">{value}</p>
        </div>
    </Link>
);

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState({ tours: 0, hotels: 0, bookings: 0 });
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AdminAuthContext);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [toursData, bookingsData, hotelsData] = await Promise.all([
                    getTourPackages(),
                    getHotelBookings(),
                    getHotels(),
                ]);
                setStats({
                    tours: toursData.length,
                    bookings: bookingsData.length,
                    hotels: hotelsData.length,
                });
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <p className="mb-8 text-gray-700">Welcome back, {authContext?.admin?.email}!</p>

            {loading ? (
                <p>Loading stats...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard 
                        title="Total Tour Packages" 
                        value={stats.tours}
                        link="/admin/tours"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5-2.5-6.5s-7 3-7 3a8 8 0 0011.314 11.314z" /></svg>}
                    />
                    <StatCard 
                        title="Total Hotels" 
                        value={stats.hotels}
                        link="/admin/hotels"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                    />
                    <StatCard 
                        title="Hotel Bookings" 
                        value={stats.bookings}
                        link="/admin/hotel-bookings"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
