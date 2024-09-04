import axios from 'axios';

const API_URL = 'URL';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/login`, {
      username,
      password,
    });
    console.error('Success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
