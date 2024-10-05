const { raw } = require("express");
const jwt = require('jsonwebtoken')

const JWT_SECRET = `MY_SUPER_SECRET`
function auth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send({
            message: 'Unauthorized',
            isVerified: false
        })
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send({
                message: 'Unauthorized',
                isVerified: false,
            })
        }
        else {
            req.user = decoded
        }
    })
    next();
}

module.exports = auth