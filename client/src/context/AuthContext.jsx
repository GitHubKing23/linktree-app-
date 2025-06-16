import { createContext, useState, useEffect } from 'react';
import api from '../api/axios.js';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, [token]);

  const login = async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    setToken(res.data.token);
  };

  const signup = async (username, email, password) => {
    const res = await api.post('/api/auth/signup', { username, email, password });
    setToken(res.data.token);
  };

  const logout = () => setToken(null);

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
