import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Analytics } from '../services/analytics/analytics';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    AsyncStorage.getItem('user').then(storedUser => {
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        Analytics.setUserProperties({ userId: parsedUser.id });
      }
      setLoading(false);
    });
  }, []);

  const login = async (email, password) => {
    // Implement login logic here
    // For demo purposes, we'll just set a dummy user
    const dummyUser = { id: 1, email, name: 'John Doe' };
    setUser(dummyUser);
    AsyncStorage.setItem('user', JSON.stringify(dummyUser));
    Analytics.setUserProperties({ userId: dummyUser.id });
    Analytics.logEvent('user_login');
  };

  const signup = async (name, email, password) => {
    // Implement signup logic here
    // For demo purposes, we'll just set a dummy user
    const dummyUser = { id: 1, email, name };
    setUser(dummyUser);
    AsyncStorage.setItem('user', JSON.stringify(dummyUser));
    Analytics.setUserProperties({ userId: dummyUser.id });
    Analytics.logEvent('user_signup');
  };

  const logout = async () => {
    setUser(null);
    AsyncStorage.removeItem('user');
    Analytics.setUserProperties({ userId: null });
    Analytics.logEvent('user_logout');
  };

  const updateUserProfile = async (userId, profileData) => {
    // In a real app, you would make an API call here
    const updatedUser = { ...user, ...profileData };
    setUser(updatedUser);
    AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    Analytics.setUserProperties(profileData);
    Analytics.logEvent('profile_updated');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

