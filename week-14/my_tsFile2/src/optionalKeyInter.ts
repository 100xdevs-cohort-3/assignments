// complex object we can defined by interface 
interface User1 {
    name: string;
    age: number;
    address?: {
        city: string;
        country: string;
        pincode : number;
    };
}
//to make anything optional we have to just add "?"
let user2: User1 ={
    name:"puja",
    age: 16,
}

//this user has  type User
let user1: User1 ={
    name:"puja",
    age: 22,
    address: {
        city:"kolkata",
        country: "india",
        pincode :700044
    },
}

//this take user as input and return a boolean
function isLegal1 (user2: User1): boolean {
    if(user2.age >= 18){
        return true 
    }else {
        return false
    }
}


//call that function with the user 
const ans1=isLegal1(user2);
if(ans1){
    console.log("I am legal");
}else {
    console.log("I am illegal")
}
