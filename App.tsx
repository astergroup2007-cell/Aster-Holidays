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

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
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
      </div>
    </AuthProvider>
  );
};

export default App;