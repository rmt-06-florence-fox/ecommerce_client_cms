const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

// router.post('/register', UserController.register)
// router.post('/login/customer', UserController.loginCustomer) 
router.post('/login/admin', UserController.loginAdmin)

module.exports = router