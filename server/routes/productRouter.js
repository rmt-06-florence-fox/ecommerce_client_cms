const express = require ('express');
const productRouter = express.Router();
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

const ProductController = require('../controllers/ProductController.js');

productRouter.use(authentication)
productRouter.get('/', ProductController.showProduct);
productRouter.post('/', ProductController.createProduct);

productRouter.use('/:id', authorization)
productRouter.get('/:id', ProductController.showProductById);
productRouter.put('/:id', ProductController.replaceProduct);
productRouter.delete('/:id', ProductController.deleteProduct);


module.exports = productRouter;