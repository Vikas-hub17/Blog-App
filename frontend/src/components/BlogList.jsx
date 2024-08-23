import React, { useState, useEffect } from 'react';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const BlogListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff; /* White background for the blog list */
  border-radius: 8px; /* Rounded corners for a modern look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const BlogItem = styled.li`
  list-style: none;
  margin-bottom: 32px; /* Space between blog posts */
  padding-bottom: 16px; /* Padding at the bottom */
  border-bottom: 1px solid #e2e8f0; /* Light border to separate posts */
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2d3748; /* Darker color for high contrast */
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: #5A67D8; /* Change color on hover */
  }
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  color: #4b5563; /* Subtle gray color for the excerpt */
  line-height: 1.6;
`;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <BlogListContainer>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <BlogItem key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <BlogTitle>{post.title}</BlogTitle>
            </Link>
            <BlogExcerpt>{post.content.substring(0, 100)}...</BlogExcerpt>
          </BlogItem>
        ))}
      </ul>
    </BlogListContainer>
  );
};

export default BlogList;
