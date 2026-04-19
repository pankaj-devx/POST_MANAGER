import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CreatePost } from './pages/createPost.jsx';
import Feed from './pages/feed.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Post Manager</h1>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App;