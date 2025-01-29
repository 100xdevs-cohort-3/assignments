interface User{
    name:string;
    age:number;
}


function sumOFAge(user1:User,user2:User){
    return user1.age + user2.age;
}

const age=sumOFAge({name:"puja",age:22},{name:"priya",age:23});
console.log(age);