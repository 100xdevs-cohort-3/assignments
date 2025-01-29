interface User2{
    id: string;
    name: string;
    age:string;
    email:string;
    password:string;
};


//only allow to change some of these not all
// interface UpdateProps{
//     name:string;
//     age:string;
//     email:string;
// }

//we can do this by using pick (Same)
type UpdateProps1=Pick <User2,'name'|'age'|'email'>;


type updatePropsOptional=Partial<UpdateProps1>;


function updateUser1(updateProps1:updatePropsOptional){
    //hit tha database to update the user
}

updateUser1({
    name:"puja",
})