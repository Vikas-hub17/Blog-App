// src/components/CommentSection.js
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getComments, addComment } from '../api';

const CommentSection = ({ postId }) => {
  const { user, isAuthenticated } = useAuth0();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(postId);
      setComments(data);
    };
    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    if (!newComment) return;
    const comment = {
      content: newComment,
      author: user.name,
    };
    await addComment(postId, comment);
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.author}:</strong> {comment.content}
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
