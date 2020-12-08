const request = require('supertest')
const app = require('../app')
const {signToken} = require('../helpers/jwt')
const {sequelize, Product} = require('../models/')
const {queryInterface} = sequelize

const admin = {}
const customer = {}
let product = {}

beforeAll(done => {
  const admin = {
    id: 1,
    username: 'admin',
    email: 'admin@mail.com',
    role: 'admin'
  }

  admin.access_token = signToken(admin)

  const customer = {
    id: 2,
    username: 'customer',
    email: 'customer@mail.com',
    role: 'customer'
  }

  customer.access_token = signToken(customer)

  Product.create({
    name: 'Pillow',
    price: 2e5,
    image_url: 'https://image.freepik.com/free-psd/square-pillow-mockup_177774-16.jpg',
    stock: 5
  })
  .then((result) => {
    product = result
    done()
  }).catch((err) => {
    done(err)
  });
})

afterAll(done => {
  queryInterface.bulkDelete('Products', null, {})
  done()
})

describe('Test End Point Add New Product', () => {
  it('success add new product', done => {
    request(app)
    .post('/products')
    .set('access_token', admin.access_token)
    .send({
      name: 'Pillow',
      price: 2e5,
      image_url: 'https://image.freepik.com/free-psd/square-pillow-mockup_177774-16.jpg',
      stock: 5
    })
    .then((result) => {
      const {body, status} = result
      expect(status).toEqual(201)
      expect(body).toHaveProperty('name', 'Pillow')
      expect(body).toHaveProperty('price', 2e5)
      expect(body).toHaveProperty('image_url', 'https://image.freepik.com/free-psd/square-pillow-mockup_177774-16.jpg')
      expect(body).toHaveProperty('stock', 5)
      done()
    }).catch((err) => {
      done(err)
    });
  })
})