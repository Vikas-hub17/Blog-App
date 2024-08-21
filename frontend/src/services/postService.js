import axios from 'axios';

const API_URL = 'http://localhost:5000/posts';

export const getPosts = async () => {
    return await axios.get(API_URL);
};

export const getPostById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createPost = async (postData) => {
    return await axios.post(API_URL, postData);
};

export const updatePost = async (id, postData) => {
    return await axios.put(`${API_URL}/${id}`, postData);
};

export const deletePost = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
