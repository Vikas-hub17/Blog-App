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
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
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
