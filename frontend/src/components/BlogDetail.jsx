import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostById } from '../api';

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const BlogTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 16px;
`;

const BlogContent = styled.div`
  font-size: 18px;
  color: #4b5563;
  line-height: 1.6;
`;

const BlogDetail = ({ blogPosts }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <BlogDetailContainer>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogContent>{post.content}</BlogContent>
    </BlogDetailContainer>
  );
}

export default BlogDetail;
