import { useState, useEffect, useContext } from 'react';
import { getCurrentSubscription } from '../services/api/subscriptionApi';
import { AuthContext } from '../context/AuthContext';

export const useSubscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const data = await getCurrentSubscription(user.id);
        setSubscription(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [user]);

  return { subscription, loading, error };
};

