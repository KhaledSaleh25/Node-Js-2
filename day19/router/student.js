const express = require('express'); 
const {addUser} = require('../controllers/Students/addStudentController')
const {showUsers} = require('../controllers/Students/ShowStudentsController')
const {searchUser} = require('../controllers/Students/searchStudentController')
const {deleteUser} = require('../controllers/Students/deleteStudentController')
const {editUser} = require('../controllers/Students/updateStudentController')

const router = express.Router();


router.post('/addUser',addUser)
router.get('/showUsers',showUsers)
router.get('/searchUser/:id',searchUser)
router.delete('/deleteUser/:id',deleteUser)
router.patch('/editUser/:id',editUser)




module.exports = router;