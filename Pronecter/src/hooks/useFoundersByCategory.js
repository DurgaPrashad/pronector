import { useState, useEffect } from 'react';
import { getFoundersByCategory } from '../services/api/categoriesApi';

export const useFoundersByCategory = (categoryId) => {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        setLoading(true);
        const data = await getFoundersByCategory(categoryId);
        setFounders(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFounders();
  }, [categoryId]);

  return { founders, loading, error };
};

