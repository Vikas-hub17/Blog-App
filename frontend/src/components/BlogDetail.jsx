import React from 'react';
import styled from 'styled-components';

const BlogDetailWrapper = styled.div`
  padding: 40px;
  background-color: #EDF2F7;
`;

const BlogHeader = styled.div`
  margin-bottom: 20px;
`;

const BlogTitle = styled.h1`
  font-size: 32px;
  color: #2D3748;
`;

const BlogMeta = styled.div`
  font-size: 14px;
  color: #718096;
  margin-bottom: 10px;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #CBD5E0;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A0AEC0;
`;

const BlogContent = styled.div`
  font-size: 18px;
  color: #4A5568;
`;

const BlogDetail = () => {
  return (
    <BlogDetailWrapper>
      <BlogHeader>
        <BlogTitle>Why should I use Flashcards for revision?</BlogTitle>
        <BlogMeta>Published 12 days ago • Read time: 4 mins</BlogMeta>
      </BlogHeader>
      <BlogImage>Title Image Placeholder</BlogImage>
      <BlogContent>
        <p>This is the detailed content of the blog post...</p>
      </BlogContent>
    </BlogDetailWrapper>
  );
};

export default BlogDetail;
