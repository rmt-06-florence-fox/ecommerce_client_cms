const express = require ('express');
const customerRouter = express.Router();
const authentication = require('../middlewares/authentication.js');
const custAuthorization = require('../middlewares/custAuthorization.js');

const CustomerController = require('../controllers/CustomerController.js');

customerRouter.post('/register', CustomerController.register);
customerRouter.post('/login', CustomerController.login);

customerRouter.use(authentication)
customerRouter.use('/carts/:id', custAuthorization)
customerRouter.get('/carts', CustomerController.showCart) 
customerRouter.patch('/carts/checkout', CustomerController.checkout) 
customerRouter.post('/carts/:ProductId', CustomerController.addProductToCart)
customerRouter.patch('/carts/:ProductId', CustomerController.removeProductFromCart)


module.exports = customerRouter;