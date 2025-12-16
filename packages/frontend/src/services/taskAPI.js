import apiService from './api';

export const taskAPI = {
  // Get all tasks with optional filters
  getTasks: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/api/tasks?${queryParams}` : '/api/tasks';
    return await apiService.get(endpoint);
  },

  // Get single task by ID
  getTask: async (taskId) => {
    return await apiService.get(`/api/tasks/${taskId}`);
  },

  // Create new task
  createTask: async (taskData) => {
    return await apiService.post('/api/tasks', taskData);
  },

  // Update task
  updateTask: async (taskId, taskData) => {
    return await apiService.put(`/api/tasks/${taskId}`, taskData);
  },

  // Delete task
  deleteTask: async (taskId) => {
    return await apiService.delete(`/api/tasks/${taskId}`);
  },

  // Toggle task completion
  toggleComplete: async (taskId) => {
    return await apiService.patch(`/api/tasks/${taskId}/complete`);
  },

  // Set task recurrence
  setRecurrence: async (taskId, recurrenceData) => {
    return await apiService.post(`/api/tasks/${taskId}/recurrence`, recurrenceData);
  },

  // Add reminder to task
  addReminder: async (taskId, reminderData) => {
    return await apiService.post(`/api/tasks/${taskId}/reminders`, reminderData);
  },
};

export default taskAPI;
