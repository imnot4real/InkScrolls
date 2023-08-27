import React, { useState } from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';
import { signIn } from './api'; // Import the signIn function from api.js

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signInResult = await signIn(email, password); // Call the signIn function

    if (signInResult.success) {
      // Sign-in successful, navigate to the home page or a protected route
      navigate('/'); // Change this to the appropriate route
    } else {
      setError(signInResult.message);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container card">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
          <p className="mt-3">Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
