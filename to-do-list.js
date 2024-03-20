// To-Do List Application Pseudo Code

// Initialize an empty to-do list
let toDoList = [];


// Function to add a task to the list
function addTask(task) {
    let displayElement = document.getElementById('display');
    displayElement.innerHTML = ''; // Clear existing tasks before repopulating the list
    
    if (task) {
        toDoList.push(task);
        displayTasks();
        displayElement.innerHTML = "Task added.";
   }
} 

 //Take the input and run it through addTask when button is clicked
document.getElementById('addTaskButton').addEventListener('click', function() {
    let task = document.getElementById('newTask').value;
    addSubTask(task)
    document.getElementById('newTask').value = ''; // Clear the input field
});


document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskValue = document.getElementById('newTaskInput').value.trim();
    if (taskValue) {
        addTask(taskValue);
        document.getElementById('newTaskInput').value = ''; // Clear the input field
    }
});

function addTask(taskValue) {
    const tasksContainer = document.getElementById('tasksContainer');
    const taskDiv = document.createElement('div');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskValue;

    const addSubtaskBtn = document.createElement('button');
    addSubtaskBtn.textContent = '➕';
    addSubtaskBtn.addEventListener('click', function() {
        if (!taskDiv.querySelector('.subtaskInput')) {
            const input = document.createElement('input');
            input.className = 'subtaskInput';
            const addBtn = document.createElement('button');
            addBtn.textContent = 'Add subtask';
            addBtn.addEventListener('click', function() {
                const subtaskValue = input.value.trim();
                if (subtaskValue) {
                    const subtaskList = taskDiv.querySelector('.subtaskList') || document.createElement('ul');
                    subtaskList.className = 'subtaskList';
                    const subtaskItem = document.createElement('li');
                    subtaskItem.textContent = subtaskValue;
                    subtaskList.appendChild(subtaskItem);
                    taskDiv.appendChild(subtaskList);
                    input.value = ''; // Clear input
                }
            });
            taskDiv.appendChild(input);
            taskDiv.appendChild(addBtn);
        }
    });

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(addSubtaskBtn);
    tasksContainer.appendChild(taskDiv);
}




// Function to display all tasks in the list
function displayTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Clear existing tasks before repopulating the list
    if (toDoList.length != 0) {
        for (let task of toDoList) {
            // Create the list item 
            let listItem = document.createElement('li');
            listItem.textContent = task;

            // create the trash button
            let trashButton = document.createElement('button');
            trashButton.textContent = '🗑️';
            trashButton.onclick = function () {removeTask(task)};

            // create the subTask button
            
            /* 
            let subTaskButton = document.createElement('button');
            subTaskButton.textContent = '➕';
            subTaskButton.onclick = function () {createSubTask(task)};

            // append the subTask icon to the list item
            listItem.appendChild(subTaskButton);
            */  

            // append the trash icon to the list item
            listItem.appendChild(trashButton);  
            
            // append the list item to the list
            taskListElement.appendChild(listItem);
        }
    } else {
        taskListElement.innerHTML = "Your task list is empty";
    }
}


//Display tasks button
document.getElementById('DisplayTasksButton').addEventListener('click',function () {
    displayTasks()
})



// Function to remove a task from the list
function removeTask(task) {
    let displayElement = document.getElementById('display');
    displayElement.innerHTML = ''; // Clear existing tasks before repopulating the list
    if (toDoList.includes(task)) {
        let index = toDoList.indexOf(task);
        if (index !== -1) {
            toDoList.splice(index, 1);
        }
        displayTasks();
        displayElement.innerHTML = "Task removed.";
    } else {
        displayElement.innerHTML = "Task not found.";
    }
        
}


/* document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.addSubtaskBtn').forEach(button => {
        button.addEventListener('click', function() {
            const taskDiv = this.parentElement;
            // Check if input and button already exist
            if (!taskDiv.querySelector('.subtaskInput')) {
                const input = document.createElement('input');
                input.className = 'subtaskInput';
                input.placeholder = 'Enter a subtask';
                taskDiv.appendChild(input);

                const addButton = document.createElement('button');
                addButton.textContent = 'Add subtask';
                addButton.className = 'addSubtask';
                taskDiv.appendChild(addButton);

                // Show input and button
                input.style.display = 'inline';
                addButton.style.display = 'inline';

                addButton.addEventListener('click', function() {
                    const subtaskValue = input.value.trim();
                    if (subtaskValue) {
                        const subtasksList = taskDiv.querySelector('.subtaskList') || document.createElement('ul');
                        subtasksList.className = 'subtaskList';
                        const subtaskItem = document.createElement('li');
                        subtaskItem.textContent = subtaskValue;
                        subtasksList.appendChild(subtaskItem);
                        taskDiv.appendChild(subtasksList);
                        input.value = ''; // Clear input after adding
                    }
                });
            }
        });
    });
}); */

/* Remove tasks button
document.getElementById('removeTaskButton').addEventListener('click', function() {
    let task = document.getElementById('removeTask').value;
    removeTask(task);
    document.getElementById('removeTask').value = ''; // Clear the input field
}); */


 /* Main loop
while (true) {
    print("\nOptions: Add, Remove, Display, Exit");
    let choice = input("Enter your choice: ");

    if (choice == "Add") {
        let task = input("Enter a task to add: ");
        addTask(task);
    } else if (choice == "Remove") {
        let task = input("Enter a task to remove: ");
        removeTask(task);
    } else if (choice == "Display") {
        displayTasks();
    } else if (choice == "Exit") {
        print("Exiting the application.");
        break
    } else {
        print("Invalid choice. Please try again.");
    }
} */