import React from 'react';
import { useParams } from 'react-router-dom';
import posts from './data'; // Import the mock data

const Post = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
};

export default Post;
