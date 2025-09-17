const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
  res.send('Login page (GET)');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Login attempt with user: ${username}`);
});


router.get('/register', (req, res) => {
  res.send('Register page (GET)');
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.send(`Register new user: ${username}`);
});

module.exports = router;
