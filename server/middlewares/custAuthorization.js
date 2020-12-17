module.exports = async (req,res,next) => {
    try {
        if (req.loggedInUser.role === "customer") {
            next()
        } else {
            throw({
                status: 401,
                message: "not authorized"
            })
        }
    } catch {
        next(err)
    }
}