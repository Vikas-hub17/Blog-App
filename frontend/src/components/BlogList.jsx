import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CreateBlog from './CreateBlog';

const BlogListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  font-size: 16px;
  color: #4A5568;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #5A67D8;
  }
`;

const BlogListItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2D3748;
  margin-bottom: 8px;
  transition: color 0.2s;

  ${BlogListItem}:hover & {
    color: #5A67D8;
  }
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const ReadMoreLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #5A67D8;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #434190;
    text-decoration: underline;
  }
`;

const fallbackPosts = [
  {
    id: 1,
    title: 'Understanding the Basics of Artificial Intelligence',
    content: 'Artificial Intelligence (AI) is a broad field that aims to create machines capable of intelligent behavior...'
  },
  {
    id: 2,
    title: 'Machine Learning: An Introduction',
    content: 'Machine Learning (ML) is a subset of AI focused on building systems that learn from data...'
  },
  {
    id: 3,
    title: 'How AI is Transforming Industries',
    content: 'AI is revolutionizing industries such as healthcare, finance, and manufacturing by automating tasks...'
  },
  {
    id: 4,
    title: 'The Future of AI: Opportunities and Challenges',
    content: 'As AI technology continues to advance, it presents both exciting opportunities and significant challenges...'
  },
  {
    id: 5,
    title: 'Getting Started with Machine Learning',
    content: 'If you\'re new to Machine Learning, this guide will help you understand the basics and start building your own models...'
  }
];

const BlogList = () => {
  const [posts, setPosts] = useState(fallbackPosts); // Initialize with fallbackPosts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError('Failed to load posts');
        setPosts(fallbackPosts); // Set fallback posts if API call fails
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [fallbackPosts]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error && posts.length === 0) return <p>{error}</p>; // Show error only if no posts

  return (
    <BlogListContainer>
      <StyledSearchBar
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredPosts.map((post) => (
          <BlogListItem key={post.id}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.content.substring(0, 100)}...</BlogExcerpt>
            <ReadMoreLink to={`/blog/${post.id}`}>Read more</ReadMoreLink>

          </BlogListItem>
        ))}
      </ul>
    </BlogListContainer>
  );
};

export default BlogList;
