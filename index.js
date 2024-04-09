const express = require('express');
const router = express.Router();
const { bulkAddPosts, downloadExcel, getUserPosts } = require('./postController');
const { getAllUsers } = require('./userController');

router.get('/', (req, res) => {
  res.sendFile('views/home.html', { root: __dirname + '/../' });
});

router.get('/allUsers', getAllUsers);
router.get('/userPosts/:userId', getUserPosts);
router.post('/bulkAddPosts/:userId', bulkAddPosts);
router.get('/downloadExcel/:userId', downloadExcel);

module.exports = router;
