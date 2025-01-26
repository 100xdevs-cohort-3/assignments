let firstName: string ="puja"
let age: number=22

//custom type

// type Type= {
//     firstName:string,
//     lastName:string,
//     age:number
// }

//custom interface

interface UserType {
    firstName:string,
    lastName:string,
    age:number
}


function greet(user:UserType){
    console.log("Hello " + user.firstName)

}

let user1: UserType={
    firstName:"puja",
    lastName:"kumari",
    age:22
}

greet(user1)