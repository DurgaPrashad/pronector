import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';
import { getCurrentSubscription } from '../services/api/subscriptionApi';
import { Analytics } from '../services/analytics/analytics';

export const SubscriptionContext = createContext({
  subscription: null,
  updateSubscription: () => {},
});

export const SubscriptionProvider = ({ children }) => {
  const [subscription, setSubscription] = useState(null);
  const { user } = useContext(AuthContext);

  // Load initial subscription from AsyncStorage
  useEffect(() => {
    const loadInitialSubscription = async () => {
      try {
        const storedSubscription = await AsyncStorage.getItem('subscription');
        if (storedSubscription) {
          setSubscription(JSON.parse(storedSubscription));
        }
      } catch (error) {
        console.error('Error loading stored subscription:', error);
      }
    };

    loadInitialSubscription();
  }, []);

  // Fetch or clear subscription based on user
  useEffect(() => {
    if (user) {
      fetchSubscription();
    } else {
      setSubscription(null);
      AsyncStorage.removeItem('subscription');
    }
  }, [user]);

  const fetchSubscription = async () => {
    try {
      const data = await getCurrentSubscription(user.id);
      if (data) {
        setSubscription(data);
        await AsyncStorage.setItem('subscription', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const updateSubscription = async (newSubscription) => {
    try {
      setSubscription(newSubscription);
      await AsyncStorage.setItem('subscription', JSON.stringify(newSubscription));
      Analytics.logEvent('subscription_updated', { plan: newSubscription.name });
    } catch (error) {
      console.error('Error updating subscription:', error);
    }
  };

  return (
    <SubscriptionContext.Provider value={{
      subscription,
      updateSubscription
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// Optional: Create a custom hook for easier context consumption
export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};