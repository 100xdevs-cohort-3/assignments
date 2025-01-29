//create two type called user and admin
//create a function that takes either a user or an admin as an input and return a string saying "welsome [name]"


interface User3{
    name:string;
    permissions:string;

}

interface Admin{
    name:string;
    age:number;
}

type UserOrAdmin=User3 | Admin;


function greet (user3:UserOrAdmin){
    return "Welcome " + user3.name;
}


// const answerr=greet({name:"puja",permissions:"admin"});
// console.log(answerr);

//we can use union and intersection inside interface
// interface User{
//     age:number & string
// }




