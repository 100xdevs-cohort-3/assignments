interface People{
    name:string;
    age :number;
    //greet is a function that take nothing and reting a string
    //both are same ----greet:() string
    greet:()=>string,
}

//create a new variable of the People interface
let person:People={
    name:"puja",
    age:22,
    greet:()=>{
        return "Good Morning";
    }
}

//we cant do this like write name and so on for that we use class
// let person:People={
//     name:"puja",
//     age:22,
//     greet:()=>{
//         return "Good Morning" + this.name;
//     }
// }

// console the greet function
let greeting=person.greet();
console.log(greeting);
