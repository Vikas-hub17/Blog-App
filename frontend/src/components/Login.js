// src/components/Login.js
import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #E2E8F0;
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

const Login = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <Modal onClose={onClose}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </Modal>
  );
};

export default Login;
