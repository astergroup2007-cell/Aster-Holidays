import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuthContext';

interface AdminProtectedRouteProps {
  children: React.ReactElement;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const authContext = useContext(AdminAuthContext);
  const location = useLocation();

  if (!authContext) {
    // This can happen if the component is not wrapped in AdminAuthProvider
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const { admin } = authContext;

  if (!admin) {
    // Redirect them to the /admin/login page, but save the current location they were
    // trying to go to.
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;
