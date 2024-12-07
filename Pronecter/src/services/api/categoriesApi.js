import axios from 'axios';

const API_URL = 'https://api.eliteconnect.com'; // Replace with your actual API URL

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error);
    throw error;
  }
};

export const getFoundersByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${API_URL}/categories/${categoryId}/founders`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching founders for category with id ${categoryId}:`, error);
    throw error;
  }
};

