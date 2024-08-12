// Create functions to make API calls to the backend using axios.
import axios from 'axios';

export const API_URL = 'http://localhost:5000'; // Replace with the actual backend URL

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};