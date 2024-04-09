const express = require('express');
const router = express.Router();
const { bulkAddPosts, downloadExcel } = require('./postController');
const { getAllUsers } = require('./UserController');

router.get('/', (req, res) => {
  res.sendFile('views/home.html', { root: __dirname + '/../' });
});

router.get('/allUsers', getAllUsers);
router.get('/userPosts/:userId', getUserPosts);
router.post('/bulkAddPosts/:userId', bulkAddPosts);
router.get('/downloadExcel/:userId', downloadExcel);

module.exports = router;
