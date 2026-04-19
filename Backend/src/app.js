const express = require('express');
const multer = require('multer'); // used for handling file uploads
const { uploadFile } = require('./services/storage.service');
const postmodel = require('./models/post.model');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const upload = multer({storage: multer.memoryStorage()}); // Store uploaded files in memory instead of disk



// This route will handle the creation of a new post, including the image upload
app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body); // This will contain the text fields (like caption)
    console.log(req.file); // This will contain the uploaded file information
    const result = await uploadFile(req.file.buffer); // Upload the file to ImageKit and get the URL
    console.log(result); // prints the URL of the uploaded image

    const post = await postmodel.create({
        image: result, // Save the image URL in the database
        caption: req.body.caption
    });
    res.status(201).json({ message: 'Post created successfully', post }); // Return the created post as JSON response
})


// This route will fetch all the posts from the database and return them to the client
app.get('/posts', async (req, res) => {
    const posts = await postmodel.find(); // Fetch all posts from the database
    res.status(200).json({message: "Posts fetched successfully", posts }); // Return the posts as JSON
})

// This route will fetch a single post by its ID
app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id; // Get the post ID from the URL parameters
    const post = await postmodel.findById(postId); // Fetch the post from the database using its ID
    if(!post) {
        return res.status(404).json({message: "post not found"});
    }
    res.status(200).json({message: "Post fetched successfully", post }); // Return the post as JSON
})



module.exports = app;
