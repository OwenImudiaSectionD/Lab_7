const taskInput = document.getElementById('taskInput');
const btn1 = document.getElementById('btn1');
const taskList = document.getElementById('taskList');


btn1.addEventListener('click', (event) => {
    event.preventDefault(); 
  
    const task = taskInput.value;
  
    const newListItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';

    newListItem.textContent = task;

    newListItem.prepend(checkbox);
    newListItem.appendChild(deletebutton);
    taskList.appendChild(newListItem);

    checkbox.addEventListener('change', () => {
        newListItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newListItem);
    });

    taskInput.value = '';
});
