const {User, Product} = require('../models')
const {verifyToken} = require('../helpers/jwt')
const createError = require('http-errors')

class Auth {
  static async authentication(req, res, next) {
    try {
      const {access_token} = req.headers
      if (!access_token) {
        throw createError(407, 'Authentication required')
      } else {
        const decoded = verifyToken(access_token)
        const user = await User.findOne({where: {email: decoded.email}})
        
        if (!user) {
          throw createError(407, 'Authentication required')
        } else {
          req.loggedInUser = decoded
          next()
        }
      }
    } catch (error) {
      next(error) 
    }
  }
}

module.exports = Auth