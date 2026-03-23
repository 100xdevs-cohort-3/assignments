//  start writing from here

import jwt from 'jsonwebtoken'

export const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                return res.status.json({
                    message: "Forbidden: Invalid token"
                })
            }
            req.userId = user.userId;
            next()
        })
    }else{
        res.status(401).json({
            message: "Unauthorized: NO token provided"
        })
    }
}