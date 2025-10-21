import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TourPackages from './pages/HotelList';
import TourPackageDetails from './pages/HotelDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FlightList from './pages/FlightList';
import FlightBooking from './pages/FlightBooking';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import HotelAsterGangtok from './pages/HotelAsterGangtok';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import AdminSettings from './pages/admin/AdminSettings';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <AdminAuthProvider>
        <div className="flex flex-col min-h-screen bg-background">
          {!isAdminRoute && <Header />}
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<TourPackages />} />
              <Route path="/hotel/:id" element={<TourPackageDetails />} />
              <Route path="/flights" element={<FlightList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cancellation-policy" element={<CancellationPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/hotel-aster-gangtok" element={<HotelAsterGangtok />} />
              
              {/* Protected User Routes */}
              <Route path="/booking/:id" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
              <Route path="/flight-booking/:id" element={<ProtectedRoute><FlightBooking /></ProtectedRoute>} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
              <Route path="/admin/manage-tours" element={<AdminProtectedRoute><ManageTours /></AdminProtectedRoute>} />
              <Route path="/admin/settings" element={<AdminProtectedRoute><AdminSettings /></AdminProtectedRoute>} />
            </Routes>
          </main>
          {!isAdminRoute && <Footer />}
        </div>
      </AdminAuthProvider>
    </AuthProvider>
  );
}

export default App;
