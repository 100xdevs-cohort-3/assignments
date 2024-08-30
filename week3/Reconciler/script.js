//For todo using dom

function deleteTodo(index) {
    const todo = document.getElementById(`container${index}`);
    const parent = todo.parentNode;
      parent.removeChild(todo);
 }
 
 // let currentIndex = 0;
 // function addTodo() {
 //   const inputEl = document.getElementById('todo');
   
 //   if(inputEl.value === ''){
 //     alert('Please enter a todo.');
 //     return;
 //   } 
 //   const todoParent = document.getElementById('showTodo');
 //   const todoChild1 = document.createElement('div');
 //   todoChild1.setAttribute('id', 'container'+currentIndex);
 //   const todoGrandchild1 = document.createElement('span');
 //   const todoGrandchild2 = document.createElement('button');
 //   todoGrandchild2.setAttribute('onclick', 'deleteTodo('+currentIndex+')')
   
 //   todoChild1.appendChild(todoGrandchild1);
 //   todoChild1.appendChild(todoGrandchild2);
   
 //   todoParent.appendChild(todoChild1);
   
 //   todoGrandchild1.innerHTML = inputEl.value.trim();
 //   todoGrandchild2.innerHTML = 'Delete';
 //   inputEl.value = '';
 //     currentIndex++;
   
 // }
 
 let ctr = 2;
 let array = [
   {
     id: 1,
     todo: "Go to gym."
   },
   {
     id: 2,
     todo: "Study hard."
   }
 ];
 function addTodo() {
   let todo = document.getElementById('todo');
   let todoValue = todo.value.trim();
   if(todoValue === '') {
     alert("Please enter a todo.");
     return;
   }
   array.push({
     id: ++ctr,
     todo: todoValue
   });
   todo.value = '';
   render(array);
 }
 
 let render = (array) => {
   const parentEl = document.getElementById('showTodo');
   parentEl.innerHTML = '';
   for(let i=1; i<=array.length; i++) {
     let childEl = document.createElement('div');
   childEl.setAttribute('id', 'container'+i);
   let grandchild1 = document.createElement('span');
   let grandchild2 = document.createElement('button');
  grandchild2.setAttribute('onclick', 'deleteTodo('+i+')');
   
   childEl.appendChild(grandchild1);
   childEl.appendChild(grandchild2);
   parentEl.appendChild(childEl);
   
   grandchild1.innerHTML = array[i-1].todo;
   grandchild2.innerHTML = 'Delete';
   
   }
   
 }
 