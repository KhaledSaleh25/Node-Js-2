const express = require('express');
const router = express.Router();


router.get('/all-student', (req, res) => res.send('Get all students'));
router.get('/get-student/:id', (req, res) => res.send(`Get student with ID ${req.params.id}`));
router.post('/add-student', (req, res) => res.send('Student added'));
router.put('/edit-student/:id', (req, res) => res.send(`Edit student with ID ${req.params.id}`));
router.delete('/delete-student/:id', (req, res) => res.send(`Delete student with ID ${req.params.id}`));

module.exports = router;
