import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-backend-api-url.com', // Replace with your backend API URL
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
    const response = await apiClient.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch the post');
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
