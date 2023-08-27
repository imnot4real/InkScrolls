import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import PostList from './PostList';
import Post from './Post';
import Footer from './Footer';
import About from './About'; // Import the About component
import Articles from './Articles'; // Import the Articles component
import Contact from './Contact'; // Import the Contact component
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage'; // Import SignInPage component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Include the Header component */}
        <Header />

        {/* Set up routes for different pages */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<PostList />} />
          <Route path="/signin" element={<SignInPage />} /> {/* Add this route */}
          <Route path="/signup" element={<SignUpPage />} />

          {/* Route for individual post pages */}
          <Route path="/post/:id" element={<Post />} />

          {/* Route for the About page */}
          <Route path="/about" element={<About />} />

          {/* Route for the Articles page */}
          <Route path="/articles" element={<Articles />} />

          {/* Route for the Contact page */}
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* Include the Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


