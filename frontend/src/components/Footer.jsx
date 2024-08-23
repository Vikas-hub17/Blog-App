import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px;
`;

const Footer = styled.footer`
  background-color: #F7FAFC; /* Light background for the footer */
  padding: 20px;
  text-align: center;
  border-top: 1px solid #E2E8F0;
  color: #4A5568; /* Muted color for text */
  font-size: 14px; /* Slightly smaller text for the footer */
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <MainContent>{children}</MainContent>
      <Footer>© 2024 ZuAI</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
