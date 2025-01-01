require('dotenv').config()
const jwt = require('jsonwebtoken')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.token

    if (!token){
        return res.json({
            mes: "please enter your valid jwt token"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.User_Password)
        if (decoded){
            req.userId = decoded.id
            next()
        }
    }
    catch(err){
        return res.json({
            mes: "an error occured while verifying the token",
            err: err
        })
    }

}

module.exports = userMiddleware;