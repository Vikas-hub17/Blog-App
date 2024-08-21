// src/pages/Home.jsx
import React from 'react';
import BlogList from '../components/BlogList';

const Home = ({ blogs }) => {
    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Home;
