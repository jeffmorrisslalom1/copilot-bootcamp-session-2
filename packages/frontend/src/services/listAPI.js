import apiService from './api';

export const listAPI = {
  // Get all lists
  getLists: async () => {
    return await apiService.get('/api/lists');
  },

  // Get single list by ID
  getList: async (listId) => {
    return await apiService.get(`/api/lists/${listId}`);
  },

  // Create new list
  createList: async (listData) => {
    return await apiService.post('/api/lists', listData);
  },

  // Update list
  updateList: async (listId, listData) => {
    return await apiService.put(`/api/lists/${listId}`, listData);
  },

  // Delete list
  deleteList: async (listId) => {
    return await apiService.delete(`/api/lists/${listId}`);
  },

  // Get tasks for a specific list
  getListTasks: async (listId) => {
    return await apiService.get(`/api/lists/${listId}/tasks`);
  },
};

export default listAPI;
