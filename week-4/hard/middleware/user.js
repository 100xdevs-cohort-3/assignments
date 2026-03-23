const jwt = require("jsonwebtoken");
const { User } = require("../database/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Authorization header missing or invalid"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from database
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
            error: error.message
        });
    }
}

module.exports = userMiddleware;
