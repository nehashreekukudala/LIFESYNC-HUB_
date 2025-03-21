let tasks = [];

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');

    if (taskInput.value.trim() === '' || taskDate.value === '') {
        alert('Please fill out both fields');
        return;
    }

    // Add task to the tasks array
    const task = {
        name: taskInput.value,
        date: new Date(taskDate.value).toISOString().split('T')[0], // Format date as YYYY-MM-DD
    };
    tasks.push(task);

    // Sort tasks by due date
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Update the task list
    updateTaskList();
    updateNextTask();

    // Clear input fields
    taskInput.value = '';
    taskDate.value = '';
});

function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.name} (Due: ${task.date})</span>
            <button onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function updateNextTask() {
    const nextTaskDiv = document.getElementById('next-task');
    if (tasks.length > 0) {
        const nextTask = tasks[0];
        nextTaskDiv.textContent = `${nextTask.name} (Due: ${nextTask.date})`;
    } else {
        nextTaskDiv.textContent = 'No tasks to study!';
    }
}

function removeTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    updateTaskList(); // Update the task list
    updateNextTask(); // Update the next task
}

// Initialize
updateNextTask();