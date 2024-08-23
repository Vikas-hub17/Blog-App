// src/pages/Blog.jsx
import React from 'react';
import styled from 'styled-components';
import BlogDetail from '../components/BlogDetail';

const BlogWrapper = styled.div`
  background-color: #F7FAFC; /* Light background color for consistency */
  padding: 40px 80px; /* Adds padding around the content */
  min-height: calc(100vh - 160px); /* Ensures full height minus header and footer */
`;

const Blog = ({ blogs }) => {
    return (
        <BlogWrapper>
            <BlogDetail blogs={blogs} />
        </BlogWrapper>
    );
};

export default Blog;
