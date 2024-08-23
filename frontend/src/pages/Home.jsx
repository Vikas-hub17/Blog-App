// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import BlogList from '../components/BlogList';

const HomeWrapper = styled.div`
  background-color: #F7FAFC; /* Light background color for the entire page */
  padding: 40px 80px; /* Padding around the content to give it space from the edges */
  min-height: calc(100vh - 160px); /* Ensures content takes up full height minus header and footer */
`;

const Home = ({ blogs }) => {
    return (
        <HomeWrapper>
            <BlogList blogs={blogs} />
        </HomeWrapper>
    );
};

export default Home;
