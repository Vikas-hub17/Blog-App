import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostById } from '../api/api';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 24px;
`;

const BlogContent = styled.div`
  font-size: 18px;
  color: #4B5563;
  line-height: 1.8;
  letter-spacing: 0.5px;
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
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
        try {
            const data = await getPostById(id);
            setPost(data);
        } catch (error) {
            console.error('Error fetching post:', error); // Improved error logging
            setError('Failed to load post');
        } finally {
            setLoading(false);
        }
    };

    fetchPost();
}, [id]);

  const handleCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <BlogDetailContainer>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogContent>{post.content}</BlogContent>

      {/* Comment Section */}
      <CommentForm postId={id} onCommentAdded={handleCommentAdded} />
      <CommentList postId={id} comments={comments} />
    </BlogDetailContainer>
  );
};

export default BlogDetail;
