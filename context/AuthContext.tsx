import React, { createContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  signup: (email: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = (email: string) => {
    // In a real app, you'd verify credentials
    const fakeUser = { id: '1', email };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const signup = (email: string) => {
    // In a real app, you'd create a new user
    const fakeUser = { id: '2', email };
    setUser(fakeUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
