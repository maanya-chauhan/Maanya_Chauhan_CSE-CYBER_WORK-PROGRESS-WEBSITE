// Function to open the to-do form modal
function openTodoForm() {
    document.getElementById("todoModal").style.display = "block";
}

// Function to close the to-do form modal
function closeTodoForm() {
    document.getElementById("todoModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("todoModal")) {
        closeTodoForm();
    }
}

function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskName = document.getElementById("task-name").value;
    const taskDate = document.getElementById("task-date").value;

    if (taskName) {
        const taskList = document.getElementById("task-list");
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = taskName.replace(/\s+/g, '-').toLowerCase(); // Create unique ID
        checkbox.addEventListener('change', toggleTask);

        const label = document.createElement("label");
        label.htmlFor = taskName.replace(/\s+/g, '-').toLowerCase(); // Match ID
        label.textContent = taskName + (taskDate ? ' (Due: ' + taskDate + ')' : '');

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskList.appendChild(taskDiv);

        // Clear the form
        document.getElementById("todo-form").reset();
    }
}

function toggleTask(event) {
    const checkbox = event.target;
    const taskDiv = checkbox.parentNode;
    taskDiv.classList.toggle("completed");
}

function deleteList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''; // Clear all tasks

}