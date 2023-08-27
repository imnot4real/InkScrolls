// api.js
// This is a mock API for demonstration purposes

const users = [];

// Function to mock sign-up
export const signUp = (username, email, password) => {
  // Check if the user with the same username or email already exists
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return { success: false, message: 'Username or email already exists' };
  }

  // Create a new user object
  const newUser = { username, email, password };
  users.push(newUser);

  return { success: true, message: 'Sign-up successful' };
};
