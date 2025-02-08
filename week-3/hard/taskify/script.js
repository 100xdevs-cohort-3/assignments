// Get all task elements and columns
const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

let draggedTask = null;

// Loop through tasks and add drag event listeners
tasks.forEach(task => {

  task.addEventListener('dragstart', (e) => {
    draggedTask = e.target;
    e.target.classList.add('hold');
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  });

  task.addEventListener('dragend', (e) => {
    e.target.classList.remove('hold', 'hide');
    draggedTask = null;
  });
});

// Loop through columns and add dragover and dragenter event listeners
columns.forEach(column => {

  column.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  column.addEventListener('dragenter', (e) => {
    e.preventDefault();
    console.log('drag enter', e.target);
    if (e.target.classList.contains('task') && e.target !== draggedTask) {
      e.target.classList.add('drag-over');
    }
  });

  column.addEventListener('dragleave', (e) => {
    // console.log('drag leave', e.target);
    if (e.target.classList.contains('task')) {
      e.target.classList.remove('drag-over');
    }
  });

  column.addEventListener('drop', (e) => {
    e.preventDefault();
    // console.log('drop', e.target);

    /*
    We check if the drop event is happening on a task element (another task within the same column).

    e.target.classList.contains('task') verifies that the drop target is a task.

    e.target !== draggedTask makes sure that we’re not dropping the task on
    */
    if (e.target.classList.contains('task') && e.target !== draggedTask) {
      e.target.classList.remove('drag-over');
      // Insert the dragged task before or after the target task based on position
      const allTasks = Array.from(column.querySelectorAll('.task'));
      // console.log(allTasks);
      const targetIndex = allTasks.indexOf(e.target);
      // console.log('targetIndex', targetIndex);
      const draggedIndex = allTasks.indexOf(draggedTask);
      // console.log('draggedIndex', draggedIndex);

      if (draggedIndex < targetIndex) {
        // console.log('insert after', e.target);
        e.target.insertAdjacentElement('afterend', draggedTask);
      } else {
        // console.log('insert before', e.target);
        e.target.insertAdjacentElement('beforebegin', draggedTask);
      }
    } 

    // If the task is dropped directly on the column itself (not on a specific task), it will be added to the end of the task list in that column.
    
    else if (e.target.classList.contains('column') && draggedTask) {
      // console.log('drop on column', e.target);
      column.querySelector('.add-btn').insertAdjacentElement('beforebegin', draggedTask);
    }
  });
});
