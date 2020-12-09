const app = require('../app')
const request = require('supertest')
const {sequelize, User, Product} = require('../models')
const {queryInterface} = sequelize
const {signToken} = require('../helpers/jwt')

describe('Product Routes Test', () => {
  let adminToken
  admin = {
    id: 1,
    username: 'admin',
    email: 'admin@mail.com',
    password: '1234',
    role: 'admin'
  }

  beforeAll(done => {
    User.create(admin)
    .then((user) => {
      adminToken = signToken(admin)
      done()
    })
    .catch(err => {
      done(err)
    })
  })

  afterAll(done => {
    queryInterface
    .bulkDelete('Users', {})
    .then(() => queryInterface.bulkDelete('Products', {}))
    .then(() => done())
    .catch(err => done(err))
  })

  describe('POST /Products - create new product', () => {
    const newProduct = {
      name: 'Pillow',
      price: 2e5,
      image_url: 'https://image.freepik.com/free-psd/square-pillow-mockup_177774-16.jpg',
      stock: 5
    }

    const newProduct2 = {
      name: '',
      price: 2e5,
      image_url: 'https://image.freepik.com/free-psd/square-pillow-mockup_177774-16.jpg',
      stock: 5
    }

    afterEach(done => {
      queryInterface
      .bulkDelete('Products', {})
      .then(() => done())
      .catch(err => done(err))
    })

    test('201 Success post Product - should create new Product', done => {
      const {name, price, image_url, stock} = newProduct
      request(app)
      .post('/products')
      .send(newProduct)
      .set('access_token', adminToken)
      .then((result) => {
        const {body, status} = result
        expect(status).toBe(201)
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('name', name)
        expect(body).toHaveProperty('price', price)
        expect(body).toHaveProperty('image_url', image_url)
        expect(body).toHaveProperty('stock', stock)
        done()
      }).catch((err) => {
        done(err)
      });
    })

    test('400 Failed post Product - should return error if name is null', done => {
      request(app)
      .post('/products')
      .send(newProduct2)
      .set('access_token', adminToken)
      .then((result) => {
        const {body, status} = result
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Validation notEmpty on name failed')
        done()
      }).catch((err) => {
        done(err)
      });
    })
  })
})