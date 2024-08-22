import React, { useState } from 'react';
import styled from 'styled-components';
import { createPost } from '../api';

const FormWrapper = styled.div`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2D3748;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 16px;
  color: #4A5568;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 16px;
  color: #4A5568;
`;

const SubmitButton = styled.button`
  background-color: #5A67D8;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, content };
      await createPost(newPost);
      alert('Blog post created successfully!');
      // Reset form
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to create post', error);
      alert('Error creating post');
    }
  };
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">Content</Label>
          <TextArea
            id="content"
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
        </FormGroup>
        <SubmitButton type="submit">Create Blog Post</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CreateBlog;
