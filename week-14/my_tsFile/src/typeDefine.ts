// type Type={
//     firstName:string,
//     lastName:string,
//     age:number
// }

// let user3: Type={
//     firstName:"puja",
//     lastName:"kumari",
//     age:22
// }

// union
// type SumInp=string | number

// function sum(a:SumInp,b:SumInp){
//     //  console.log(a+b);  

//     //give error
//     // return a+b;
// }

// sum(5,7)
// sum("puja","kumari")



// intersection

interface Manager{
    name:string,
    age:number
}

interface Employee{
    name:string,
    department:string
}

//intersection
type TeamLead= Manager & Employee

let t: TeamLead={
    name:"puja",
    age:22, 
    department:"AIML"
}
