import axios from 'axios';

const API_URL = 'https://api.eliteconnect.com'; // Replace with your actual API URL

export const getFounders = async (searchQuery = '') => {
  try {
    const response = await axios.get(`${API_URL}/founders`, {
      params: { search: searchQuery },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching founders:', error);
    throw error;
  }
};

export const getFounderById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/founders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching founder with id ${id}:`, error);
    throw error;
  }
};

export const updateFounderProfile = async (id, profileData) => {
  try {
    const response = await axios.put(`${API_URL}/founders/${id}`, profileData);
    return response.data;
  } catch (error) {
    console.error(`Error updating founder profile with id ${id}:`, error);
    throw error;
  }
};

