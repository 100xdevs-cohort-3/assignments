
function deleteTodo(index) {
    const todo = document.getElementById(`container${index}`);
    const parent = todo.parentNode;
      parent.removeChild(todo);
 }

 
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
