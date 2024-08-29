import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2D3748;
  margin-bottom: 8px;
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  color: #4A5568;
`;

const fallbackPosts = [
  {
    id: 1,
    title: 'Fallback Post 1',
    content: 'This is a fallback post that shows up when the API call fails. It contains default content to ensure that users have something to read.',
  },
  {
    id: 2,
    title: 'Fallback Post 2',
    content: 'Here is another fallback post. It serves as a placeholder for the real data that would normally be fetched from the server.',
  },
  // Add more fallback posts as needed
];

const BlogList = () => {
  const [posts, setPosts] = useState([]);
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
        setPosts(fallbackPosts); // Use fallback posts if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Dependency array remains empty

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </BlogListItem>
        ))}
      </ul>
    </BlogListContainer>
  );
};

export default BlogList;
