const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product')
const Auth = require('../middlewares/auth_admin')

router.use(Auth.authentication)
router.post('/', ProductController.create)


module.exports = router