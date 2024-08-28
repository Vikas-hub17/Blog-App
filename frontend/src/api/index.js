import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const getPostById = async (id) => {
  try {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Failed to fetch post:", error);
      throw error;
  }
};
export const createPost = async (post) => {
  try {
    const response = await apiClient.post('/posts', post);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post');
  }
};
