const jwt = require("jsonwebtoken");
const config = require("../config");

function generateToken(payload) {
    const token = jwt.sign({
        ...payload
    }, config.JWT_SECRET)

    return token;
}

function verifyToken(token) {
    return jwt.verify(token, config.JWT_SECRET);
}

module.exports = {
    generateToken,
    verifyToken,
}