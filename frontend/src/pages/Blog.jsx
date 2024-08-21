// src/pages/Blog.jsx
import React from 'react';
import BlogDetail from '../components/BlogDetail';

const Blog = ({ blogs }) => {
    return (
        <div className="blog">
            <BlogDetail blogs={blogs} />
        </div>
    );
};

export default Blog;
