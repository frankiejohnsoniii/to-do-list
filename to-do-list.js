// To-Do List Application Pseudo Code

// Initialize an empty to-do list
let toDoList = [];


// Function to add a task to the list
function addTask(task) {
   if (task) {
    toDoList.push(task);
    console.log("Task added.");
    console.log(task);
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
    if (toDoList.length != 0) {
        print("To-Do List:");
        for (let task of toDoList) {
            print("- " + task);
        }
    } else {
        print("Your to-do list is empty.")
    }
}
    
//Take the input and run it through addTask
document.getElementById('addTaskButton').addEventListener('click', function() {
    let task = document.getElementById('newTask').value;
    addTask(task);
    document.getElementById('newTask').value = ''; // Clear the input field
});



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