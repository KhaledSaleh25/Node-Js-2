const express = require('express'); 
const {login} = require('../controllers/Auth/loginController')
const {register} = require('../controllers/Auth/registerController')
const router = express.Router();

router.post('/login',login)
router.post('/register',register)




module.exports = router;