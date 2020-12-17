const express = require ('express');
const router = express.Router();

const Controller = require('../controllers/Controller.js');
const ProductController = require('../controllers/ProductController.js');

const adminRouter = require('./adminRouter.js');
const customerRouter = require('./customerRouter.js');

router.get('/', Controller.home);
router.get('/products', ProductController.showProduct);

router.use('/admin', adminRouter);
router.use('/customer', customerRouter);

module.exports = router;