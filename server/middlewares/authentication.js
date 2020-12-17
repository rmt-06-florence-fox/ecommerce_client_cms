const { User, Customer } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

module.exports = async (req,res,next) => {
    try {
        const { access_token } = req.headers
        if(!access_token) {
            throw({
                status: 401,
                message: "please login"
            })
        }
        else {
          const decoded = verifyToken(access_token)
          User.findOne({
            where: {
                id: decoded.id,
                email: decoded.email
            }
          })
            .then(admin => {
                if(admin) {
                    return admin
                }
                else {
                    return Customer.findOne({
                        where: {
                            id: decoded.id,
                            email: decoded.email
                        }
                    })
                }
            })
            .then(customer => {
                if (customer) {
                    req.loggedInUser = decoded
                    next()
                }
                else {
                    throw {
                        status: 401,
                        message: "please login"
                    }
                }
            })
            .catch(err => {
                next(err)
            })
        }
    } catch (error) {
        next(error)
    }
}