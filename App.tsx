import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import HotelAsterGangtok from './pages/HotelAsterGangtok';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Admin imports
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import ManageHotels from './pages/admin/ManageHotels';
import ManageHotelBookings from './pages/admin/ManageHotelBookings';
import AdminSettings from './pages/admin/AdminSettings';
import { AdminAuthProvider } from './context/AdminAuthContext';
import AdminProtectedRoute from './components/AdminProtectedRoute';

const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <AdminAuthProvider>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <AdminProtectedRoute>
              <AdminLayout>
                <Routes>
                  <Route index element={<AdminDashboard />} />
                  <Route path="tours" element={<ManageTours />} />
                  <Route path="hotels" element={<ManageHotels />} />
                  <Route path="bookings" element={<ManageHotelBookings />} />
                  <Route path="settings" element={<AdminSettings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AdminLayout>
            </AdminProtectedRoute>
          }/>
        </Routes>
      </AdminAuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen font-sans bg-background">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/booking/:id" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/flights" element={<FlightList />} />
            <Route path="/flight-booking/:id" element={<ProtectedRoute><FlightBooking /></ProtectedRoute>} />
            <Route path="/hotel-aster-gangtok" element={<HotelAsterGangtok />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
