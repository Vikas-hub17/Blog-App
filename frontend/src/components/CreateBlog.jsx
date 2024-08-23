import React, { useState } from 'react';
import styled from 'styled-components';
import { createPost } from '../api';

const FormWrapper = styled.div`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Adjust width to control form width */
  margin: 0 auto; /* Center the form horizontally */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2D3748; /* Dark gray for label */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px; /* Increase padding for better touch target */
  border: 1px solid #CBD5E0; /* Light gray border */
  border-radius: 4px;
  font-size: 16px;
  color: #4A5568; /* Darker gray text */
  background-color: #f7fafc; /* Light background */
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05); /* Subtle inner shadow for depth */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 16px;
  color: #4A5568;
  background-color: #f7fafc;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
  resize: vertical; /* Allow vertical resizing */
`;

const SubmitButton = styled.button`
  background-color: #5A67D8; /* Blue background */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 4px;
  padding: 12px 20px; /* Larger padding for button */
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%; /* Full-width button */

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #A0AEC0; /* Gray out button when disabled */
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createPost({ title, content });
      setTitle('');
      setContent('');
    } catch (error) {
      setError('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content</Label>
          <TextArea
            id="content"
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Blog Post'}
        </SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CreateBlog;
