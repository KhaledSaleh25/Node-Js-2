const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => res.send('Login endpoint'));
router.post('/register', (req, res) => res.send('Register endpoint'));
router.post('/otp', (req, res) => res.send('OTP endpoint'));
router.post('/new-pass', (req, res) => res.send('Change password'));

module.exports = router;
