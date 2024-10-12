const jwt = require('jsonwebtoken')
const JWT_sceret = "saurabhk";
const JWT_sceretA = "saurabh123"


function userMiddleware(req, res, next) {
    // Implement user auth logic
    
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_sceret)

    if(decoded) {
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "user not found"
        })
    }
    
  
}

function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_sceretA);

    if (decoded) {
        req.adminId = decoded.id;
        next();
    }else{
        res.status(403).json({
            message: "YOU are not signed in"
        })
    }
}

module.exports = {
    userMiddleware,
    adminMiddleware
}