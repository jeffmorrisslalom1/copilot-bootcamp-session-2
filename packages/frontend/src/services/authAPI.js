import apiService from './api';

export const authAPI = {
  // Register a new user
  register: async (userData) => {
    return await apiService.post('/api/auth/register', userData);
  },

  // Login user
  login: async (credentials) => {
    const response = await apiService.post('/api/auth/login', credentials);
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  // Request password reset
  requestPasswordReset: async (email) => {
    return await apiService.post('/api/auth/reset-password', { email });
  },

  // Confirm password reset
  confirmPasswordReset: async (token, newPassword) => {
    return await apiService.post('/api/auth/reset-password/confirm', {
      token,
      newPassword,
    });
  },
};

export default authAPI;
