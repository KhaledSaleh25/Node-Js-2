const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => res.send('User registered'));
router.post('/login', (req, res) => res.send('User logged in'));
router.post('/logout', (req, res) => res.send('User logged out'));
router.post('/send-otp', (req, res) => res.send('OTP sent'));
router.post('/forgot-password', (req, res) => res.send('Password reset link sent'));

module.exports = router;
