const { Customer, Product, Cart } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/jwt.js');

class CustomerController {
    static register(req, res) {
        let customerObj = {
            email: req.body.email,
            password: req.body.password,
            role: ''
        }
        Customer.create(customerObj)
        .then(data => {
            res.status(201).json({email: data.email, id: data.id, role: data.role});
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'});
        })
    }

    static login(req, res, next) {
        Customer.findOne({where: {email: req.body.email}})
        .then(data => {
            if(!data) {
                throw {
                    status: 401,
                    message: 'invalid account'
                }  
            }
            else {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    const access_token = generateToken(data.id, data.email, data.role);
                    res.status(200).json({access_token});
                }
                else {
                    throw {
                        status: 401,
                        message: 'invalid email / password'
                    }  
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static showCart (req, res, next) {
        Cart.findAll({
            where: {
                CustomerId: req.loggedInUser.id,
                status: false
            },
            order: [
                ['createdAt', 'ASC']
            ],
            include: Product
        })
        .then(carts => {
            res.status(200).json(carts)
        })
        .catch(err => {
            next(err)
        })
    }

    static addProductToCart (req, res, next) {
        let stock;
        Product.findOne({
            where: {
                id: req.params.ProductId
            }
        })
        .then(product => {
            if (product) {
                stock = product.stock
                return Cart.findOne({
                    where: {
                        CustomerId: req.loggedInUser.id,
                        ProductId: req.params.ProductId,
                        status: false
                    }
                })
            }
            else {
                throw {
                    status: 404,
                    message: "data not found"
                }
            }
        })
        .then(item => {
            if (item) {
                if (item.quantity < stock) {
                    return Cart.increment('quantity', {
                        where: {
                            CustomerId: req.loggedInUser.id,
                            ProductId: req.params.ProductId
                        },
                        returning: true
                    })
                } else {
                    throw {
                        status: 400,
                        message: "stock not enough"
                    }
                }
            } else {
                if (stock < 1) {
                    throw {
                        status: 400,
                        message: "out of stock"
                    }
                } else {
                    return Cart.create({
                        CustomerId: req.loggedInUser.id,
                        ProductId: req.params.ProductId,
                        status: false,
                        quantity: 1
                    })
                }
            }
        })
        .then(cart => {
            if (cart.id) {
                res.status(200).json(cart)
            }
            else {
                res.status(200).json(cart[0][0][0])
            }
        })
        .catch(err => {
            console.log(err)
            next (err)
        })
    }

    static removeProductFromCart (req, res, next) {
        Cart.findOne({
            where: {
                ProductId: req.params.ProductId,
                CustomerId: req.loggedInUser.id,
                status: false
            }
        })
        .then(cart => {
            if (cart) {
                if (cart.quantity <= 1) {
                    return Cart.destroy({
                        where: {
                            ProductId: req.params.ProductId,
                            CustomerId: req.loggedInUser.id,
                            status: false
                        }
                    })
                } else {
                    return Cart.decrement('quantity', {
                        where: {
                            ProductId: req.params.ProductId,
                            CustomerId: req.loggedInUser.id,
                            status: false
                        },
                        returning: true
                    })
                }
            } else {
                throw {
                    status: 404,
                    message: "data not found"
                }
            }
        })
        .then(cart => {
            if (typeof (cart) !== "number") {
                if (cart.id){
                    res.status(200).json(cart)
                }
                else { 
                    res.status(200).json(cart[0][0][0])
                }
            } else {
                res.status(200).json({message: "cart success to remove"})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static async checkout (req, res, next) {
        try {
            const findData = await Cart.findAll({ where: { CustomerId: req.loggedInUser.id, status: false }, include: [Product]})
            const arrPromisesCart = []
            const arrPromisesProduct = []
            let errors = []
            // console.log(findData, '<<<<<< checkout findData')
            findData.forEach(e => {
                // console.log(e, '<<< foreach e')
                if (e.quantity <= e.Product.stock && e.status === false){
                    let payloadCart = { status: true }
                    let payloadProduct = { stock: e.Product.stock - e.quantity }
                    arrPromisesCart.push(Cart.update(payloadCart, { where: { id: e.id }, returning: true }))
                    arrPromisesProduct.push(Product.update(payloadProduct, { where: { id: e.ProductId }, returning: true }))
                  } else {
                        errors.push(`${e.Product.name} stock not enough`)
                  }
                })
                if (errors.length) {
                    throw {
                        status: 400,
                        messages: errors
                    }
                }
                const dataCart = await Promise.all(arrPromisesCart)
                const dataProduct = await Promise.all(arrPromisesProduct)
                const result = dataCart.map(e => {
                    return e[1][0]
                })
                res.status(200).json(result)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = CustomerController;