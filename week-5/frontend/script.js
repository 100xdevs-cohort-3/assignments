//  start from here

//moving to signing-in if a user clicks on signing in button
 function movetoSignin(){
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("signin-container").style.display = "block";
    document.getElementById("todo-container").style.display = "none";
 }
 function movetoSignUp(){
    document.getElementById("signup-container").style.display = "block";
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("todo-container").style.display = "none";
 }

 function movetotodos(){
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("todo-container").style.display = "block";
 }

 document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
      
    const response = await axios.post("http://localhost:3000/users/signup",{
       firstName : firstName,
       lastName : lastName,
       email : email,
       password : password
    })


 
     document.getElementById("response-message").textContent = response.data.message;

     movetoSignin();

 })




 document.getElementById('signin-form').addEventListener('submit', async (e) => {
    e.preventDefault();
   
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
      
    const response = await axios.post("http://localhost:3000/users/signin",{
       email : email,
       password : password
    })


    localStorage.setItem("token",response.data.message);
     document.getElementById("response-message").textContent = 'Signed In Succesfully';

     movetotodos();

    getTodos();


     

 })


 document.getElementById('logout-button').addEventListener('click', () => {
      localStorage.removeItem("token");

      movetoSignin();

      document.getElementById("response-message").textContent = 'Logged Out Succesfully !';

 })



 //creating todos functionality  

 
async function getTodos(){
    const token = localStorage.getItem("token");
    // console.log(token);
    const response= await axios.get("http://localhost:3000/todos",{

    headers:{
        token : token
    }
    })
  const todolist = response.data.message;
console.log(todolist);
 const todos = todolist.map((x)=>x.task);
 ;

}








