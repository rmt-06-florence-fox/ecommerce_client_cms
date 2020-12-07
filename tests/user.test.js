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
})