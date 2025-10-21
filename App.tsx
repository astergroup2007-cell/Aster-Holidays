import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FlightList from './pages/FlightList';
import FlightBooking from './pages/FlightBooking';
import ProtectedRoute from './components/ProtectedRoute';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import NotFound from './pages/NotFound';
import HotelAsterGangtok from './pages/HotelAsterGangtok';

// Admin components
import AdminLayout from './components/admin/AdminLayout';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import ManageHotels from './pages/admin/ManageHotels';
import ManageHotelBookings from './pages/admin/ManageHotelBookings';
import AdminSettings from './pages/admin/AdminSettings';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute && location.pathname !== '/admin/login') {
    return (
      <AdminAuthProvider>
          <AdminProtectedRoute>
              <AdminLayout>
                  <Routes>
                      <Route path="/admin" element={<AdminDashboard />} />
                      <Route path="/admin/tours" element={<ManageTours />} />
                      <Route path="/admin/hotels" element={<ManageHotels />} />
                      <Route path="/admin/bookings" element={<ManageHotelBookings />} />
                      <Route path="/admin/settings" element={<AdminSettings />} />
                  </Routes>
              </AdminLayout>
          </AdminProtectedRoute>
      </AdminAuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-background">
        {location.pathname !== '/admin/login' && <Header />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Renaming to Tour Packages for consistency */}
            <Route path="/hotels" element={<HotelList />} /> 
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/booking/:id" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/flights" element={<FlightList />} />
            <Route path="/flight-booking/:id" element={<ProtectedRoute><FlightBooking /></ProtectedRoute>} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/hotel-aster-gangtok" element={<HotelAsterGangtok />} />

            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            
            {/* Admin Login is outside the protected layout */}
            <Route path="/admin/login" element={<AdminAuthProvider><AdminLogin /></AdminAuthProvider>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {location.pathname !== '/admin/login' && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;
