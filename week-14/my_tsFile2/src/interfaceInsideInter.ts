//interfaces uses other interfaces
interface Address{
    city :string;
    country: string;
    pincode:number;
    houserNumber: string;
};

interface UserInterface{
    name: string;
    age:number;
    address: Address;
};

interface Office{
    address:Address;
}

let userInte: UserInterface ={
    name:"puja",
    age: 22,
    address: {
        city:"kolkata",
        country: "india",
        pincode :700044,
        houserNumber: "123"
    }
}


//take user as an input and return true or false based on user is 18 or not

function isLegal2 (userInte: UserInterface): boolean {
    if(userInte.age >= 18){
        return true 
    }else {
        return false
    }
}


const answer=isLegal2(userInte);
if(answer){
    console.log("I am legal");
}else {
    console.log("I am illegal")
}

