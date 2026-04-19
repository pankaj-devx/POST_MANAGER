
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  const navigate = useNavigate();
  // State variables to manage loading state and display messages to the user
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // This function will handle the form submission, send the image and caption to the backend API, and log the response
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true when the form is submitted
    setMessage(''); // Clear any previous messages
    const formData = new FormData(e.target); // Create a FormData object from the form, which will include the file and caption
    try {
      const response = await axios.post('http://localhost:3000/create-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Post created successfully:", response.data);
      setMessage('Post created successfully!');
      e.target.reset(); // Reset the form after successful submission
      navigate('/feed'); // Redirect to the feed page after creating a post
    } catch (error) {
      console.error("Error creating post:", error.message);
      setMessage('Error creating post: ' + error.message);
    } finally {
      setLoading(false); // Set loading state back to false after the request is completed
    }
  }

  return (
    <div className="app-container">
      <section className="create-post-section">
        <h1>Create a New Post 🚀</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" required />
          <input type="text" name='caption' placeholder="Enter a caption..." required />
          <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Post'}</button>
        </form>
        {message && <p className="message">{message}</p>}
      </section>
    </div>
  )
}
