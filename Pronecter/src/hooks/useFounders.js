import { useState, useEffect } from 'react';
import { getFounders } from '../services/api/foundersApi';

export const useFounders = (searchQuery = '') => {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        setLoading(true);
        const data = await getFounders(searchQuery);
        setFounders(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFounders();
  }, [searchQuery]);

  return { founders, loading, error };
};

