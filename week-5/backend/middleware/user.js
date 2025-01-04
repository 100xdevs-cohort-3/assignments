const express = require("express")
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config()


function userMiddleware(req,res,next){

    try{

        const token= req.headers.token;
       console.log("token" + token);
       
        // if (!token) {
        //     return res.status(401).json({ error: "Token is missing. Authorization denied." });
        // }
        const decodedInfo = jwt.verify(token, process.env.JWT_SECRET)

        console.log((decodedInfo));
       if(decodedInfo){
        req.userid = decodedInfo.id;
        next();
        }
        else{
            return res.status(400).json({
                error : "Invalid Token"
            })
        }

    }catch(error){
        // console.log(error);
      return res.json({
        
        error : error.message
      })
    }

}


module.exports = {
    userMiddleware
}