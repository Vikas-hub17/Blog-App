import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostById } from '../api';
import CommentSection from './CommentSection';

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff; /* Ensure a white background for the content area */
  border-radius: 8px; /* Adds rounded corners for a modern look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const BlogTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #111827; /* Dark color for high contrast */
  margin-bottom: 24px;
`;

const BlogContent = styled.div`
  font-size: 18px;
  color: #4B5563; /* Subtle gray for the text content */
  line-height: 1.8; /* Increased line height for readability */
  letter-spacing: 0.5px; /* Slight letter spacing for a clean look */
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #4B5563;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: red;
`;

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <BlogDetailContainer>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogContent>{post.content}</BlogContent>
      <CommentSection postId={id} />
    </BlogDetailContainer>
  );
};

export default BlogDetail;
