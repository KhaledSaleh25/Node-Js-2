const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => res.send('Group created'));
router.get('/get/:id', (req, res) => res.send(`Get group ${req.params.id}`));

module.exports = router;
