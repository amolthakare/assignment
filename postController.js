const Post = require('./Post');
const axios = require('axios');

//fetch user
const getUserPosts = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//add post
const bulkAddPosts = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = response.data;
    await Post.bulkCreate(posts);
    res.status(201).send('Posts added successfully');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Excel 
const downloadExcel = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await Post.findAll({ where: { userId } });
    // download
    res.status(200).send('Excel file generated');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserPosts,
  bulkAddPosts,
  downloadExcel
};
