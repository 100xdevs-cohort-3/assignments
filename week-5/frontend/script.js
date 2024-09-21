//  start from here
let todosCount=0;

const populateTodo=(todos,cls,completed,title)=>{
    const divEl=document.createElement('div');
    divEl.setAttribute('class',cls);
    // divEl.style.border='1px solid black'
    divEl.style.display='flex'
    divEl.style.margin='5px 0'

    const checkboxEl=document.createElement('input');
    checkboxEl.setAttribute('type','checkbox');
    checkboxEl.setAttribute('class',cls);
    checkboxEl.checked=completed;

    const inputEl=document.createElement('input');
    inputEl.setAttribute('class',cls);
    inputEl.setAttribute('value',`${title}`);
    // inputEl.style.border='none';

    const deleteEl=document.createElement('button');
    deleteEl.innerHTML='Delete';
    deleteEl.setAttribute('class',cls);

    const updateEl=document.createElement('button');
    updateEl.innerHTML='Update';
    updateEl.setAttribute('class',cls);


    divEl.appendChild(checkboxEl);
    divEl.appendChild(inputEl);
    divEl.appendChild(deleteEl);
    divEl.appendChild(updateEl);

    todos.appendChild(divEl);
}


const signupForm=document.getElementById('signup');
signupForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(signupForm);
    
    const formDataObject={};
    formData.forEach((value,key)=>{
        formDataObject[key]=value;
    })
    // console.log(formDataObject);
    
    fetch("http://localhost:3000/user/signup",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formDataObject)
    })
    .then(res=>res.json())
    .then(data=>{
        // if(data.token){
        //     localStorage.setItem('authorization',data.token);
        //     console.log(data.token);
            
        // }
        alert(data.message);
        if(data.message==="User signed up successfully" || data.message==="User already exists"){
            console.log(data);
            
            signupForm.style.display='none'
            signinForm.style.display='block'
        }
    })
    .catch(err=>{
        console.log(err);        
        alert("Signup failed")
    });
})


const signinForm=document.getElementById('signin');
signinForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(signinForm);
    // console.log(formData);
    
    const formDataObject={};
    formData.forEach((value,key)=>{
        formDataObject[key]=value;
    })
    // console.log(formDataObject);
    
    fetch("http://localhost:3000/user/signin",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formDataObject)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.token){
            localStorage.setItem('authorization',data.token);
            // console.log(data.token);
            
        }
        alert(data.message);

        signinForm.style.display='none';

        const todoSection=document.getElementById('todoSection');
        todoSection.style.display='block';
        const logout=document.getElementById('logout');
        logout.style.display='block'

        fetch("http://localhost:3000/todo/todos-list",{
            headers:{
                'content-type':'application/json',
                'authorization':localStorage.getItem('authorization')
            }
        })
        .then(res=>res.json())
        .then(data=>{
            const todos=document.getElementById('todos');
            data.todos.forEach(todo=>{
                // console.log(todo);
                
                populateTodo(todos,todo.id, todo.completed, todo.title);
            })
            todosCount=Number(data.todosCount);
            console.log(data.todosCount);
            
        })
        .catch(err=>{alert(err)})
    })
    .catch(err=>{alert("Signin failed")});
})



const createEl=document.getElementById('create');
createEl.addEventListener('click',(event)=>{
    const todoInput=document.getElementById('todo').value;
    // console.log(todoInput);
    todosCount+=1;
    fetch("http://localhost:3000/todo/create-todo",{
        headers:{
            'content-type':'application/json',
            'authorization':localStorage.getItem('authorization')
        },
        method:"POST",
        body:JSON.stringify({
            todo:{
                'id':`${todosCount}`,
                'title':todoInput,
                'completed':0
            }
        })
    })
    .then(res=>res.json())
    .then(data=>{
        alert(data.message);

        const todos=document.getElementById('todos');
        
        if(data.message==="Todo created successfully")
        populateTodo(todos,todosCount,0,todoInput);
    })
    .catch(err=>{
        console.log(err);        
        alert("Creation failed")
    })
})



const todos=document.getElementById('todos');
todos.addEventListener('click',(event)=>{
    //Complete Todo
    if(event.target&&event.target.matches('input[type="checkbox"]')&&event.target.checked){
        const id=event.target.className;
        fetch("http://localhost:3000/todo/complete-todo",{
            headers:{
                'content-type':'application/json',
                'authorization':localStorage.getItem('authorization')
            },
            method:"PATCH",
            body:JSON.stringify({
                "id":id
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message);
        })
        .catch(err=>{
            alert(err)
        })
    }


    //Delete todo
    if(event.target&&event.target.tagName==="BUTTON"&&event.target.innerHTML==="Delete"){
        const id=event.target.className;
        
        fetch("http://localhost:3000/todo/delete-todo",{
                    headers:{
                        'content-type':'application/json',
                        'authorization':localStorage.getItem('authorization')
                    },
                    method:"POST",
                    body:JSON.stringify({
                        "id":id
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    alert(data.message)
                    const todo=document.getElementsByClassName(id);
                    if(data.message==="Todo deleted successfully")
                    todo[0].style.display='none'
                })
                .catch(err=>{
                    alert("Deletion failed")
                })
    }

    //Update Todo
    if(event.target&&event.target.tagName==="BUTTON"&&event.target.innerHTML=="Update"){
        const id=event.target.className;
        const todo=document.getElementsByClassName(`${id}`);
        fetch("http://localhost:3000/todo/update-todo",{
            headers:{
                'content-type':'application/json',
                'authorization':localStorage.getItem('authorization')
            },
            method:"PATCH",
            body:JSON.stringify({"todo":{
                "title":todo[2].value,
                "id":id,
                "completed":todo[1].checked
            }})
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message);
        })
        .catch(err=>{
            alert("updation failed")
        })
    }
})


const logout=document.getElementById('logout');
logout.addEventListener('click',()=>{
    localStorage.removeItem('authorization');
    location.reload(true);
})


//complete todo
// addEventListener('click',()=>{
//     fetch("",{
//         headers:{
//             'content-type':'application/json',
//             'authorization':localStorage.getItem(authorization)
//         },
//         method:"PATCH",
//         body:{
//             "id":`${id}`
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         alert(data.message);
//     })
//     .catch(err=>{
//         alert(err)
//     })
// })


// //Update todo
// addEventListener("click",()=>{
//     fetch("",{
//         headers:{
//             'content-type':'application/json',
//             'authorization':localStorage.getItem(authorization)
//         },
//         method:"PATCH",
//         body:{
//             "title":`${todoInput}`,
//             "id":`${id}`,
//             "completed":0
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         alert(data.message);
//     })
//     .catch(err=>{alert("Updation failed")})
// })


// //delete todo
// addEventListener('click',()=>{
//     fetch("",{
//         headers:{
//             'content-type':'application/json',
//             'authorization':localStorage.getItem(authorization)
//         },
//         method:"POST",
//         body:{
//             "id":`${id}`
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         alert(data.message)
//     })
//     .catch(err=>{
//         alert("Deletion failed")
//     })
// })


