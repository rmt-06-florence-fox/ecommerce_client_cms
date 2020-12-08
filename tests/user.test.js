const request = require('supertest')
const app = require('../app')

describe('Test Endpoint POST /login Admin', () => {
  it('login success', done => {
    request(app)
    .post('/login/admin')
    .send({email: 'admin@mail.com', password: '1234'})
    .then((result) => {
      const {body, status} = result
      expect(status).toBe(201)
      expect(body).toHaveProperty('access_token', expect.any(String))
      done()
    }).catch((err) => {
      done(err)
    });
  })

  it('login failed wrong input password', done => {
    request(app)
    .post('/login/admin')
    .send({email: 'admin@mail.com', password: '1111'})
    .then((result) => {
      const {body, status} = result
      expect(status).toBe(400)
      expect(body).toHaveProperty('message', 'email or password is incorrect')
      done()
    }).catch((err) => {
      done(err)
    });
  })

  it('login failed wrong input email', done => {
    request(app)
    .post('/login/admin')
    .send({email: 'notadmin@mail.com', password: '1234'})
    .then((result) => {
      const {body, status} = result
      expect(status).toBe(400)
      expect(body).toHaveProperty('message', 'email or password is incorrect')
      done()
    }).catch((err) => {
      done(err)
    });
  })

  it('login failed not input email and password', done => {
    request(app)
    .post('/login/admin')
    .send({email: '', password: ''})
    .then((result) => {
      const {body, status} = result
      expect(status).toBe(400)
      expect(body).toHaveProperty('message', 'email or password is incorrect')
      done()
    }).catch((err) => {
      done(err)
    });
  })
})