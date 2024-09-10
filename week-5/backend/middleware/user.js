//  start writing from here
const jwt=require('jsonwebtoken');

const verifyJWT=(req,res,next)=>{
    const token=req.headers.authorization;
    const decoded=jwt.verify(token, process.env.JWT_SECRET);
    const  username=decoded.username;
    if(!username){
        return res.status(401)
        .send({message:"Unathorized request"})
    }
    
    next();
}

module.exports=verifyJWT;