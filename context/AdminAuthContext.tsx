import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminUser {
  username: string;
}

interface AdminAuthContextType {
  admin: AdminUser | null;
  login: (username: string, password: string) => Promise<string | null>;
  logout: () => void;
}

export const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({ children }) => {
  const [admin, setAdmin] = useState<AdminUser | null>(() => {
    try {
      const storedAdmin = sessionStorage.getItem('currentAdmin');
      return storedAdmin ? JSON.parse(storedAdmin) : null;
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      sessionStorage.setItem('currentAdmin', JSON.stringify(admin));
    } else {
      sessionStorage.removeItem('currentAdmin');
    }
  }, [admin]);

  const login = async (username: string, password: string): Promise<string | null> => {
    // In a real application, this would be a call to a secure backend.
    // For this demo, we'll use hardcoded credentials.
    if (username === 'admin' && password === 'password123') {
      const adminUser: AdminUser = { username };
      setAdmin(adminUser);
      return null; // Success
    }
    return 'Invalid admin username or password.'; // Error
  };

  const logout = () => {
    setAdmin(null);
    navigate('/admin/login');
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
