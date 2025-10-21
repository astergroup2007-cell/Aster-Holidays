import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuthContext';

const AdminProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const adminAuthContext = useContext(AdminAuthContext);
  const location = useLocation();

  if (!adminAuthContext?.isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;
