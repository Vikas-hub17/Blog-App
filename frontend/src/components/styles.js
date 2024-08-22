import styled from 'styled-components';

export const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

export const BlogItem = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 8px;
`;

export const BlogExcerpt = styled.p`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.5;
`;
