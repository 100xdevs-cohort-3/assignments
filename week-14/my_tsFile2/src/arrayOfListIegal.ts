//give this interface write a function that takes an array of user and returns the legal user (age >18)
interface Userrr{
    firstName:string;
    lastName:string;
    age:number;
};


function filterUsers(users:Userrr[]){
    let anss: Userrr[]=[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            anss.push(users[i]);
        }
    }
    return anss;
}

const filteredUsers=filterUsers([
    {
        firstName:"puja",
        lastName:"kumari",
        age:20
    },
    
    
]);

console.log(filteredUsers);