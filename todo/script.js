function deleteTodo(index) {
    const todo = document.getElementById(`container${index}`);
    const parent = todo.parentNode;
      parent.removeChild(todo);
 }
 
 let currentIndex = 0;
 function addTodo() {
   const inputEl = document.getElementById('todo');
   
   if(inputEl.value === ''){
     alert('Please enter a todo.');
     return;
   } 
   const todoParent = document.getElementById('showTodo');
   const todoChild1 = document.createElement('div');
   todoChild1.setAttribute('id', 'container'+currentIndex);
   const todoGrandchild1 = document.createElement('p');
   const todoGrandchild2 = document.createElement('button');
   todoGrandchild2.setAttribute('onclick', 'deleteTodo('+currentIndex+')')
   
   todoChild1.appendChild(todoGrandchild1);
   todoChild1.appendChild(todoGrandchild2);
   
   todoParent.appendChild(todoChild1);
   
   todoGrandchild1.innerHTML = inputEl.value.trim();
   todoGrandchild2.innerHTML = 'Delete';

   inputEl.value = '';
    currentIndex++;
   
 }