//  start writing from here
const jwt = require("jsonwebtoken")
const JWT_SECRET = "I am Authenticator!"
async function authenticator(req,res, next){
    let token = req.headers.token;
    console.log(req.headers);
    try{
        const email = jwt.verify(token, JWT_SECRET).email;
        req.email = email;
        next();
    }
    catch(err){
        console.log("ERROR: ",err);
        res.status(500).json({
            message : "Please try later!"
        })
    }
}

module.exports = authenticator;