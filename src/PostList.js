import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css'; // Import the CSS file

function PostList() {
  return (
    <div className="grid-container">
      {/* Larger square post */}
      <div className="larger-post">
        <div className="post-content">
          <h2>General Theory of Relativity</h2>
          <p>
            Einstein's theory of general relativity describes gravity as the curvature of spacetime caused by massive objects.
          </p>
        </div>
        <Link className="read-more-link" to="/post/1">Read More</Link>
      </div>

      {/* Smaller square posts */}
      <div className="smaller-posts">
        <div className="smaller-post-1">
          <div className="post-content">
            <h2>Big Bang Theory</h2>
            <p>
              The big bang theory explains the origin of the universe from a singularity and its subsequent expansion.
            </p>
          </div>
          <Link className="read-more-link" to="/post/2">Read More</Link>
        </div>

        <div className="smaller-post-2">
          <div className="post-content">
            <h2>Black Holes and Hawking Radiation</h2>
            <p>
              Black holes are regions of spacetime with strong gravitational effects, and Hawking radiation suggests they can emit energy.
            </p>
          </div>
          <Link className="read-more-link" to="/post/3">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default PostList;
