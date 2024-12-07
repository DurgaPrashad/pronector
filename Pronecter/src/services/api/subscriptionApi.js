import axios from 'axios';

const API_URL = 'https://api.eliteconnect.com'; // Replace with your actual API URL

export const getCurrentSubscription = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/subscription`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching subscription for user ${userId}:`, error);
    throw error;
  }
};

export const upgradeSubscription = async (planId) => {
  try {
    const response = await axios.post(`${API_URL}/subscriptions/upgrade`, { planId });
    return response.data;
  } catch (error) {
    console.error(`Error upgrading subscription to plan ${planId}:`, error);
    throw error;
  }
};

export const cancelSubscription = async (userId) => {
  try {
    const response = await axios.post(`${API_URL}/users/${userId}/subscription/cancel`);
    return response.data;
  } catch (error) {
    console.error(`Error cancelling subscription for user ${userId}:`, error);
    throw error;
  }
};

