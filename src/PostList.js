// PostList.js

import React from 'react';
import { Link } from 'react-router-dom';
import postsData from './data/postsData';

function PostList() {
  return (
    <div>
      {/* Render each blog post */}
      {postsData.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;

