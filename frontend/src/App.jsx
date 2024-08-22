import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from '../src/components/BlogList';
import BlogDetail from '../src/components/BlogDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';

const blogPosts = [
  {
    id: 1,
    title: 'Why should I use Flashcards for revision?',
    excerpt: 'Flashcards are a great way to reinforce learning, improve recall, and boost exam performance...',
    content: 'Flashcards are a great way to reinforce learning... (full content here)',
  },
  {
    id: 2,
    title: 'How to create effective study schedules',
    excerpt: 'Creating a study schedule that works for you is key to maximizing your study time...',
    content: 'Creating a study schedule that works for you... (full content here)',
  },
  {
    id: 3,
    title: 'Top 10 tips for exam preparation',
    excerpt: 'From managing your time to practicing past papers, these tips will help you ace your exams...',
    content: 'From managing your time to practicing past papers... (full content here)',
  },
];

const App = () => {
  return (
    <Router>
        <div className='App'>
            <Header />
            <main>
      <Routes>
      <Route path="/create" element={<CreateBlog/>} />
        <Route path="/" element={<BlogList blogPosts={blogPosts} />} />
        <Route path="/blog/:id" element={<BlogDetail blogPosts={blogPosts} />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
