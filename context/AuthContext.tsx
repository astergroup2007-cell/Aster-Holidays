import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';

// Omit password from the user object exposed via context for security
type SafeUser = Omit<User, 'password'>;

interface AuthContextType {
  user: SafeUser | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<SafeUser | null>(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [user]);

  const getUsersFromStorage = (): User[] => {
    try {
      const storedUsers = localStorage.getItem('users');
      return storedUsers ? JSON.parse(storedUsers) : [];
    } catch {
      return [];
    }
  };

  const login = async (email: string, password: string): Promise<string | null> => {
    const users = getUsersFromStorage();
    const foundUser = users.find(u => u.email === email);

    if (foundUser && foundUser.password === password) {
      const { password: _, ...safeUser } = foundUser;
      setUser(safeUser);
      return null; // Success
    }
    return 'Invalid email or password.'; // Error
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const signup = async (name: string, email: string, password: string): Promise<string | null> => {
    const users = getUsersFromStorage();
    if (users.some(u => u.email === email)) {
      return 'An account with this email already exists.'; // Error
    }

    const newUser: User = { id: Date.now().toString(), name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    const { password: _, ...safeUser } = newUser;
    setUser(safeUser);
    return null; // Success
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};