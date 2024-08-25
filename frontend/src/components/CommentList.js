// src/components/CommentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  background-color: #F7FAFC;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <CommentWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <p>{comment.content}</p>
        </Comment>
      ))}
    </CommentWrapper>
  );
};

export default CommentList;
