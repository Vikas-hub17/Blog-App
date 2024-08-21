import React, { useState } from 'react';
import styled from 'styled-components';

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

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
        <SubmitButton type="submit">Create Blog Post</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CreateBlog;
