import React from 'react';
import { Link } from 'react-router-dom';
import { BlogListContainer, BlogItem, BlogTitle, BlogExcerpt } from './styles';

const BlogList = ({ blogPosts }) => {
  return (
    <BlogListContainer>
      {blogPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
          <BlogItem>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          </BlogItem>
        </Link>
      ))}
    </BlogListContainer>
  );
}

export default BlogList;
