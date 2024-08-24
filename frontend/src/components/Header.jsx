// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import SignUp from './SignUp';

const HeaderWrapper = styled.header`
  background-color: #F7FAFC;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E2E8F0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.h1`
  font-size: 28px;
  color: #2D3748;
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavLink = styled.a`
  color: #4A5568;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #2D3748;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#5A67D8" : "#E2E8F0")};
  color: ${(props) => (props.primary ? "#ffffff" : "#5A67D8")};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const { currentUser } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <HeaderWrapper>
      <Logo>ZuAI</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/create">Create Blog</NavLink>
        {currentUser ? (
          <p>Welcome, {currentUser.email}</p>
        ) : (
          <>
            <Button primary onClick={() => setShowLogin(true)}>Login</Button>
            <Button onClick={() => setShowSignUp(true)}>Join Now</Button>
          </>
        )}
      </Nav>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </HeaderWrapper>
  );
};

export default Header;
