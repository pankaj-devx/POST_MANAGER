
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModel = mongoose.model("Post", postSchema); // collection name = posts (means hamara collection name "posts" hoga)

module.exports = postModel;


/*

post = {
image : String
caption : String
}

user = {
name : String
email : String
password : String
posts : [post1, post2, post3...]
}

*/