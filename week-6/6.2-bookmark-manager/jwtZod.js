//Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

//Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise 
//Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
    
//To test, go to the 02-jwt folder and run `npx jest ./tests'

const jwt=require("jsonwebtoken");
const jwtPassword="secret";
const zod=require("zod");


const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signJwt(username,password){
    const usernameResponse =emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature=jwt.sign({
        username
    },jwtPassword)
    return signature;
}

function decodeJwt(token){
    //true,false
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }else {
        return false;
    }
}

function verify(token){
    let ans=true;
    try {
        jwt.verify(tokne,jwtPassword);
    } catch(e){
        ans=false;
    }
    return ans;
}