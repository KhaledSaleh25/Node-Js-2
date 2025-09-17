const express = require('express');
const router = express.Router();

router.post('/add-reel', (req, res) => res.send('Reel added'));
router.post('/add-post', (req, res) => res.send('Post added to reel'));
router.get('/get-all', (req, res) => res.send('All reels'));
router.get('/get/:key', (req, res) => res.send(`Get reel by key ${req.params.key}`));

module.exports = router;
