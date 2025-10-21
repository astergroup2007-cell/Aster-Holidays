import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Admin user type stored in localStorage
interface AdminUser {
  email: string;
  password?: string; // Password should only exist in storage, not in context state
}

// Safe admin user type exposed in context (without password)
type SafeAdminUser = Omit<AdminUser, 'password'>;

interface AdminAuthContextType {
  admin: SafeAdminUser | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  changePassword: (currentPassword: string, newPassword: string) => Promise<string | null>;
}

export const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

interface AdminAuthProviderProps {
  children: ReactNode;
}

const ADMIN_STORAGE_KEY = 'adminAccount';

export const AdminAuthProvider: React.FC<AdminAuthProviderProps> = ({ children }) => {
  const [admin, setAdmin] = useState<SafeAdminUser | null>(() => {
    try {
      const storedAdmin = sessionStorage.getItem('currentAdminSession');
      return storedAdmin ? JSON.parse(storedAdmin) : null;
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  // Initialize default admin account in localStorage if it doesn't exist
  useEffect(() => {
    const storedAdminAccount = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!storedAdminAccount) {
      const defaultAdmin: AdminUser = {
        email: 'admin@asterholidays.in',
        password: 'admin'
      };
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(defaultAdmin));
    }
  }, []);

  useEffect(() => {
    if (admin) {
      sessionStorage.setItem('currentAdminSession', JSON.stringify(admin));
    } else {
      sessionStorage.removeItem('currentAdminSession');
    }
  }, [admin]);
  
  const getAdminFromStorage = (): AdminUser | null => {
      const data = localStorage.getItem(ADMIN_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
  };

  const login = async (email: string, password: string): Promise<string | null> => {
    const storedAdmin = getAdminFromStorage();

    if (storedAdmin && storedAdmin.email === email && storedAdmin.password === password) {
      const { password: _, ...safeAdmin } = storedAdmin;
      setAdmin(safeAdmin);
      return null; // Success
    }
    return 'Invalid email or password.'; // Error
  };

  const logout = () => {
    setAdmin(null);
    navigate('/admin/login');
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<string | null> => {
    const storedAdmin = getAdminFromStorage();
    if (!storedAdmin || storedAdmin.password !== currentPassword) {
        return "Incorrect current password.";
    }

    const updatedAdmin = { ...storedAdmin, password: newPassword };
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(updatedAdmin));
    return null; // Success
  }

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, changePassword }}>
      {children}
    </AdminAuthContext.Provider>
  );
};