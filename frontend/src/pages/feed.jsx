import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Feed = () => {
    const [posts, setposts] = useState([
        {
            _id: 1,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            caption: "Beautiful Sunset"
        }
    ])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts').then( // Make a GET request to the backend API
                    (res) => {
                        setposts(res.data.posts); // Update the state with the fetched posts
                    }
                );
            } catch (error) {
                console.error("Error fetching posts:", error.message);
            }
        };

        fetchPosts();
    }, []);


  return (
    <div className="app-container">
        <section className="feed-section">
        <h1>Feed</h1>

        {posts.map((post) => (
            <div className="post-card" key={post._id}>
            <img src={post.image} alt="Post" className="post-image" />
            <p className="post-caption">{post.caption}</p>
            </div>
        ))}

        </section>
    </div>
)
}

export default Feed;