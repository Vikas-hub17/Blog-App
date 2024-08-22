import React from 'react';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';
import { BlogListContainer, BlogItem, BlogTitle, BlogExcerpt } from './styles';

const BlogList = ({ blogPosts }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    fetchPosts();
  }, []);

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
