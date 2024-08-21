import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333333;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #333;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #777;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#5A67D8" : "#E2E8F0")};
  color: ${(props) => (props.primary ? "#ffffff" : "#5A67D8")};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>ZuAI</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/create">Create Blog</NavLink>
        <Button>Login</Button>
        <Button primary>Join Now</Button>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
