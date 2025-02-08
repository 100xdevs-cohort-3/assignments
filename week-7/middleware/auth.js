const { verifyToken } = require('../services/token.service');

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedToken = verifyToken(token);
    console.log(decodedToken.userId);
    if (decodedToken) {
        req.userId = decodedToken.userId;
        next();
    } else {
        res.status(403).json({
            message: "Not authorized"
        })
    }
}

module.exports = {
    auth,
}

