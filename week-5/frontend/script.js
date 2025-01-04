function movetoSignin(){
   document.getElementById("signup-container").style.display="none";
   document.getElementById("signin-container").style.display="block";

}
function movetoSignUp(){
   document.getElementById("signup-container").style.display="block";
   document.getElementById("signin-container").style.display="none";

}

document.getElementById("signup-form").addEventListener("submit", async (e)=>{
   const firstname = document.getElementById("signup-firstname").value;
   const lastname = document.getElementById("signup-lastname").value;
   const email = document.getElementById("signup-email").value;
   const password =  document.getElementById("signup-password").value;
   e.preventDefault()

  const response = await fetch("http://localhost:3000/users/signup", {
   method : 'POST',
   headers : {
      'Content-Type' : 'application/json' 
   } ,
   body : JSON.stringify({
      firstname,
      lastname ,
      password ,
      email
   })
  })

  const data = await response.json();
  
  data.message ? alert(data.message) : alert(data.error)
})




document.getElementById("signin-form").addEventListener("submit", async (e)=>{
  
   const email = document.getElementById("signin-email").value;
   const password =  document.getElementById("signin-password").value;
   e.preventDefault()

  const response = await fetch("http://localhost:3000/users/signin", {
   method : 'POST',
   headers : {
      'Content-Type' : 'application/json' 
   } ,
   body : JSON.stringify({
      
      password ,
      email
   })
  })

  const data = await response.json();
  
  if(data.token) alert("You are logged in")
   if(data.error){
      alert(data.error);
      return;

   }


  localStorage.setItem("token" , data.token);

     

  document.getElementById("todo-container").style.display = "block"
  document.getElementById("signin-container").style.display = "none"


   addTodos();

 
 

})



document.getElementById("todo-form").addEventListener("submit",async (e)=>{
   e.preventDefault();

   const task = document.getElementById("todo-input").value.trimStart().trimEnd();

   // console.log(task);
   // console.log(typeof task);


   const response = await fetch("http://localhost:3000/todos/create",{
      method : "POST",
      headers : {
         'Content-Type' : 'application/json' ,
         token : localStorage.getItem("token")
      },
      body : JSON.stringify({
         title : task
      })
   })


   const data=  await response.json();


    alert(data.message || data.error)


    addTodos()



   

   // document.getElementById("todo-list")


})


async function addTodos(){

   try{

const token = localStorage.getItem("token");
const response = await fetch("http://localhost:3000/users/todos",{
   headers : {
      'Content-Type' : 'application/json' ,
      token : token
   }
})

const todos= await response.json();

if(todos.message) document.getElementById("response-message").innerText = todos.message;

else {
   // console.log(todos.tasks);
   document.getElementById("response-message").style.display = "none";



   const todoList = document.getElementById("todo-list");
   todoList.innerHTML = "";

   todos.tasks.map((x)=>{
      const li = document.createElement("li");
      li.textContent=x.title;

      
      const completeButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      completeButton.textContent = "Complete";
      deleteButton.textContent = "Delete"
      

      completeButton.onclick= ()=>{
         completeTodo(x._id , !x.isCompleted);
      }

      deleteButton.onclick = ()=>{
          deleteTodo(x._id);
      }

      if(x.isCompleted) {
         li.style.textDecoration = "line-through"
         li.appendChild(deleteButton)

      }



      if(!x.isCompleted){
         li.appendChild(completeButton);
         li.appendChild(deleteButton)
      }

      todoList.appendChild(li);
   })




   
}

   }catch(error){
      console.log(`Error while loading the todos ${error}`);
      
   }

}


async function completeTodo(todoId , todoStatus){
   const token = localStorage.getItem("token");
   const response = await fetch(`http://localhost:3000/todos/mark/${todoId}` ,{
      method : "PUT",
      headers : {
         'Content-Type' : 'application/json' ,
         token : token
      },

   
   }) 

   const data = await response.json();


   addTodos()


}


 

   document.getElementById("logout-button").addEventListener("click",()=>{
      localStorage.removeItem("token");

   document.getElementById("signin-container").style.display = "block";
   document.getElementById("todo-container").style.display = "none";
   document.getElementById("response-message").style.display = "none";
   })

  

async function deleteTodo(todoId){
   const token = localStorage.getItem("token");

   const response = await fetch(`http://localhost:3000/todos/delete/${todoId}`,{
      method : "DELETE",
      headers : {
         'Content-Type' : 'application/json' ,
         token : token
      }
   })

   const data = await response.json();

   alert(data.message || data.error)

   addTodos()


}