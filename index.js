function newTask(){
    // Create a new div element to represent the task
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    // Create a new input element for the task text
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Enter your task here...';

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function () {
        taskDiv.remove();
    }

    // Append the input and delete button to the task div
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(deleteButton);

    // Append the task div to the tasks container
    document.getElementById('tasks').appendChild(taskDiv);

    // Automatically focus on the new task input field
    taskInput.focus();
}