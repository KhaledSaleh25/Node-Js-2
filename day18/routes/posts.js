const express = require('express');
const router = express.Router();

router.post('/add-new-post', (req, res) => res.send('New post added'));
router.delete('/delete-post/:id', (req, res) => res.send(`Deleted post ${req.params.id}`));
router.get('/get-post/:id', (req, res) => res.send(`Get post ${req.params.id}`));
router.get('/user/:id', (req, res) => res.send(`Get posts by user ${req.params.id}`));

module.exports = router;
