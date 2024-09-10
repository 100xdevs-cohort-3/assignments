//  start writing from here
const jwt=require('jsonwebtoken');

let users=[];


const generateJWT=(username)=>{
    // const userame=req.body.username;
    const token=jwt.sign({username:username},process.env.JWT_SECRET)
    return token;
}



const signup=(req,res)=>{
    const user={username:req.body.username,password:req.body.password};
    if(!user.username||!user.password){
        return res.status(403).send({message:"User Details required"});
    }

    for(let i=0;i<users.length;i++)
    {
        if(user.username===users[i].username&&user.password===users[i].password){
            return res.status(400).send({message:"User already exists"})
        }
    }

    users.push(user);
    const token=generateJWT(user.username);
    return res
    .status(201)
    .send({
        token,
        message:"User signed up successfully"
    })

}

const signin=(req,res)=>{
    const user={username:req.body.username,password:req.body.password};
    if(!user.username||!user.password){
        return res.status(403).send({message:"User Details required"});
    }

    for(let i=0;i<users.length;i++)
    {
        if(user.username===users[i].username&&user.password===users[i].password){
            const token=generateJWT(user.username);
            return res
            .status(201)
            .send({
                token,
                message:"User signed in successfully"
            })
        }
    }

    return res
    .status(404)
    .send({
        message:"User doesn't exist"
    })
}

const logout=(req,res)=>{

}

module.exports={
    signup,
    signin,
    logout
};