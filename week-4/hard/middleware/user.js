const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(403).json({
            msg: "Access token is missing"
        });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.id = verified.id;
        next();
    } catch (error) {
        res.status(401).json({
            error: "Invalid token"
        });
    }
}

module.exports = userMiddleware;
