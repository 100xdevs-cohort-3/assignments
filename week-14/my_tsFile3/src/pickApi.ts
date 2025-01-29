interface User1{
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
type UpdateProps=Pick <User1,'name'|'age'|'email'>;


function UpdateUser(usdateProps:UpdateProps){
    //hit tha database to update the user
}