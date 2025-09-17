const express = require('express');
const router = express.Router();


router.get('/all', (req, res) => {
  res.send('List of all users');
});


router.post('/new', (req, res) => {
  const { username } = req.body;
  res.send(`New user added: ${username}`);
});

module.exports = router;
