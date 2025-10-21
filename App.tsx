import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';
import Booking from './pages/Booking';
import FlightList from './pages/FlightList';
import FlightBooking from './pages/FlightBooking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import CancellationPolicy from './pages/CancellationPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import HotelAsterGangtok from './pages/HotelAsterGangtok';

// Admin Imports
import { AdminAuthProvider } from './context/AdminAuthContext';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import AdminProtectedRoute from './components/AdminProtectedRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
            <Route path="/admin/tours" element={<AdminProtectedRoute><ManageTours /></AdminProtectedRoute>} />

            {/* Public Routes */}
            <Route path="/*" element={<MainApp />} />
          </Routes>
        </div>
      </AdminAuthProvider>
    </AuthProvider>
  );
};

// Component to render main app with header and footer, excluding admin pages
const MainApp: React.FC = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/hotel-aster-gangtok" element={<HotelAsterGangtok />} />
        <Route path="/booking/:id" element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        } />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/flight-booking/:id" element={
           <ProtectedRoute>
            <FlightBooking />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;