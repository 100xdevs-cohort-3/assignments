const {User}=require("../db/index.js");


function userMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;

    User.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            next();
        }else {
            res.status(403).json({
                message:"User not exits"
            })
        }
    })
}

module.exports={
    UserMiddleware
}