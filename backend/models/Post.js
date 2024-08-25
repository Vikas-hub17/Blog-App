const pool = require('../config/db');

// Get all posts
const getPosts = async () => {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    return result.rows;
};

// Get a specific post
const getPostById = async (id) => {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0];
};

// Create a new post
const createPost = async (title, content, author) => {
    const result = await pool.query(
        'INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *',
        [title, content, author]
    );
    return result.rows[0];
};

// Update a post
const updatePost = async (id, title, content, author) => {
    const result = await pool.query(
        'UPDATE posts SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *',
        [title, content, author, id]
    );
    return result.rows[0];
};

// Delete a post
const deletePost = async (id) => {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
