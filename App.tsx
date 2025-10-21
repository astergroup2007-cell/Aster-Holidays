import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import FlightList from './pages/FlightList';
import Booking from './pages/Booking';
import FlightBooking from './pages/FlightBooking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import HotelAsterGangtok from './pages/HotelAsterGangtok';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import ManageHotels from './pages/admin/ManageHotels';
import ManageHotelBookings from './pages/admin/ManageHotelBookings';
import ManageItinerary from './pages/admin/ManageItinerary';
import AdminSettings from './pages/admin/AdminSettings';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ManageArticles from './pages/admin/ManageArticles';
import ArticleEditor from './pages/admin/ArticleEditor';


const App: React.FC = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    // Admin routes will not have the standard Header/Footer
    if (isAdminRoute && location.pathname !== '/admin/login') {
        return (
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="tours" element={<ManageTours />} />
                        <Route path="hotels" element={<ManageHotels />} />
                        <Route path="hotel-bookings" element={<ManageHotelBookings />} />
                        <Route path="itineraries" element={<ManageItinerary />} />
                        <Route path="articles" element={<ManageArticles />} />
                        <Route path="articles/new" element={<ArticleEditor />} />
                        <Route path="articles/edit/:id" element={<ArticleEditor />} />
                        <Route path="settings" element={<AdminSettings />} />
                    </Route>
                </Routes>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {location.pathname !== '/admin/login' && <Header />}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<HotelList />} />
                    <Route path="/hotel/:id" element={<HotelDetails />} />
                    <Route path="/flights" element={<FlightList />} />
                    <Route path="/booking/:id" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
                    <Route path="/flight-booking/:id" element={<ProtectedRoute><FlightBooking /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                    <Route path="/shipping-policy" element={<ShippingPolicy />} />
                    <Route path="/hotel-aster-gangtok" element={<HotelAsterGangtok />} />
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/article/:slug" element={<ArticleDetail />} />
                    
                    {/* Admin Login is a standalone page */}
                    <Route path="/admin/login" element={<AdminLogin />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {location.pathname !== '/admin/login' && <Footer />}
        </div>
    );
};

export default App;
