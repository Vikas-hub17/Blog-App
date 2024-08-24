import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const HeaderWrapper = styled.header`
  background-color: #F7FAFC; /* Light background for a clean look */
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E2E8F0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
`;

const Logo = styled.h1`
  font-size: 28px; /* Slightly larger for emphasis */
  color: #2D3748; /* Darker shade for strong contrast */
  font-weight: 700;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px; /* Increased gap for better spacing */
`;

const NavLink = styled.a`
  color: #4A5568; /* Muted color for links */
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #2D3748; /* Darker on hover for clarity */
  }
`;

const button = styled.button`
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
    transform: translateY(-1px); /* Slight lift on hover */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow on hover */
  }
`;

const Header = () => {
  const { currentUser } = useAuth();

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
            <button onClick={() => window.location.href='/login'}>Login</button>
            <button onClick={() => window.location.href='/signup'}>Join Now</button>
          </>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
