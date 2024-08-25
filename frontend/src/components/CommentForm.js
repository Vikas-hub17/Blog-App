// src/components/CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #E2E8F0;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #5A67D8;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const CommentForm = ({ postId, onCommentAdded }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/posts/${postId}/comments`, { content });
      setContent('');
      onCommentAdded(response.data);
    } catch (error) {
      console.error('Error submitting comment', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        rows="4"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default CommentForm;
