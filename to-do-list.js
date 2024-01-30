// To-Do List Application Pseudo Code

// Initialize an empty to-do list
let toDoList = [];


// Function to add a task to the list
function addTask(task) {
   if (task) {
    toDoList.push(task);
    console.log("Task added.");
    console.log(toDoList);
    displayTasks();
   }
}

    

// Function to remove a task from the list
function removeTask(task) {
    if (toDoList.includes(task)) {
        toDoList.remove(task);
        print("Task removed.");
    } else {
        print("Task not found.");
    }
        
}
    

// Function to display all tasks in the list
function displayTasks() {
    let taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Clear existing tasks before repopulating the list
    if (toDoList.length != 0) {
        for (let task of toDoList) {
            let listItem = document.createElement('li');
            listItem.textContent = task;
            taskListElement.appendChild(listItem);
        }
    } else {
        taskListElement.innerHTML = "Your task list is empty";
    }
}
    
//Take the input and run it through addTask
document.getElementById('addTaskButton').addEventListener('click', function() {
    let task = document.getElementById('newTask').value;
    addTask(task);
    document.getElementById('newTask').value = ''; // Clear the input field
});

//Remove tasks button
document.getElementById('removeTaskButton').addEventListener('click', function() {
    let task = document.getElementById('removeTask').value;
    removeTask(task);
    document.getElementById('newTask').value = ''; // Clear the input field
});



//Display tasks button
document.getElementById('DisplayTasksButton').addEventListener('click',function () {
    displayTasks()
})





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