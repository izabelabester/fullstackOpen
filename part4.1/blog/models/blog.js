import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = 'mongodb://localhost/bloglist'
// mongoose.connect(mongoUrl)

// module.exports = mongoose.model(Blog, blogSchema)

export default Blog