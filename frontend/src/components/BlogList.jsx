import React from 'react';
import styled from 'styled-components';

const BlogListWrapper = styled.div`
  padding: 40px;
  background-color: #F7FAFC;
`;

const BlogItem = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  font-size: 20px;
  color: #2D3748;
`;

const BlogExcerpt = styled.p`
  color: #4A5568;
  font-size: 16px;
`;

const BlogList = () => {
  return (
    <BlogListWrapper>
      <BlogItem>
        <BlogTitle>Why should I use Flashcards for revision?</BlogTitle>
        <BlogExcerpt>This article explains the benefits of using flashcards...</BlogExcerpt>
      </BlogItem>
      {/* Repeat BlogItem for each post */}
    </BlogListWrapper>
  );
};

export default BlogList;
