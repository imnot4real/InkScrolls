import axios from 'axios';

// Define the API URL for sign-up
const API_URL = '/api/signup';

// Function to send a sign-up request
export async function signUp(name, email, password) {
  try {
    const response = await axios.post(API_URL, { name, email, password });
    return response.data; // Assuming the server sends back data in the response
  } catch (error) {
    // Handle errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return { success: false, message: error.response.data.message };
    } else if (error.request) {
      // The request was made but no response was received
      return { success: false, message: 'No response from the server' };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { success: false, message: 'Request failed to send' };
    }
  }
}

// Function to send a sign-in request
export async function signIn(email, password) {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data; // Assuming the server sends back data in the response
  } catch (error) {
    // Handle errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return { success: false, message: error.response.data.message };
    } else if (error.request) {
      // The request was made but no response was received
      return { success: false, message: 'No response from the server' };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { success: false, message: 'Request failed to send' };
    }
  }
}