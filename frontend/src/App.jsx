// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreateBlog from './components/CreateBlog';


function App() {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };

    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home blogs={blogs} />} />
                        <Route path="/blog/:id" element={<Blog blogs={blogs} />} />
                        <Route path="/create" element={<CreateBlog addBlog={addBlog} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
