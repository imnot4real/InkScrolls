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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/about" element={<About />} /> {/* Add the route for About page */}
          <Route path="/articles" element={<Articles />} /> {/* Add the route for Articles page */}
          <Route path="/contact" element={<Contact />} /> {/* Add the route for Contact page */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


