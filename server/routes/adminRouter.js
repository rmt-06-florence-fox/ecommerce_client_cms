const express = require ('express');
const adminRouter = express.Router();
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

const ProductController = require('../controllers/ProductController.js');
const AdminController = require('../controllers/AdminController.js');

adminRouter.post('/login', AdminController.login);

adminRouter.use(authentication)
adminRouter.post('/products', ProductController.createProduct);

adminRouter.use('/products/:id', authorization)
adminRouter.get('/products/:id', ProductController.showProductById);
adminRouter.put('/products/:id', ProductController.replaceProduct);
adminRouter.delete('/products/:id', ProductController.deleteProduct);


module.exports = adminRouter;