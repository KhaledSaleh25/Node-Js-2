const express = require('express');
const router = express.Router();


router.get('/all-users', (req, res) => res.send('Get all users'));
router.get('/get-user/:id', (req, res) => res.send(`Get user with ID ${req.params.id}`));
router.post('/add-user', (req, res) => res.send('User added'));
router.put('/edit-user/:id', (req, res) => res.send(`Edit user with ID ${req.params.id}`));
router.delete('/delete-user/:id', (req, res) => res.send(`Delete user with ID ${req.params.id}`));

module.exports = router;
