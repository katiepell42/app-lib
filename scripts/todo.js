const inputField = document.getElementById("todo-new-task");
const pendingList = document.getElementById("todo-list-pending");
const doneList = document.getElementById("todo-list-done");

// Used in addNewTaskToList()
function clearInputField() {
    inputField.value = '';
}

function moveToDone(event) {
    if(event.target.checked) {
        let boxParent = checkbox.parentElement; // Get the checkbox's parent
        doneList.appendChild(boxParent); // Add that parent to the done list
    }
    else {
        let boxParent = checkbox.parentElement; // Get the checkbox's parent
        doneList.appendChild(boxParent); // Add that parent to the done list
    }
}


// Used in addNewTaskToList()
function createNewTask() {
    const todoItem = document.createElement("div"); // Create a div for the list item
    todoItem.classList.add('form-check');
    todoItem.classList.add('todo-item');

    const myCheckbox = document.createElement("input"); // Create checkbox input
    myCheckbox.type = 'checkbox';
    myCheckbox.classList.add('form-check-input');
    myCheckbox.value = '';
    myCheckbox.addEventListener('change', moveToDone);
    todoItem.appendChild(myCheckbox); // Add it to the list item div

    const myLabel = document.createElement("label"); // Create checkbox label
    myLabel.classList.add('form-check-label');
    myLabel.for= "flexCheck1"; // Must match the id value of the checkbox element
    todoItem.appendChild(myLabel); // Add it to the list item div

    const inputText = document.getElementById("todo-new-task").value // Write task out
    if(inputText == "") { // Don't allow empty tasks
        return;
    }
    const labelText = document.createTextNode(inputText);
    myLabel.appendChild(labelText);

    return todoItem;
}

function addNewTaskToList(listItem) {
    var listItem = createNewTask(); // Create new task
    pendingList.appendChild(listItem);
    clearInputField(); // Make the text field empty again
}



    // let checkboxes = document.querySelectorAll('.form-check-input'); // Get all checkboxes
 
    // for (var checkbox of checkboxes) // For each of those checkboxes
    // {
    //     checkbox.addEventListener('change', function(event) // Whenever the checkbox changes
    //     {
    //         if (event.target.checked) {
    //             let boxParent = checkbox.parentElement; // Get the checkbox's parent
    //             doneList.appendChild(boxParent); // Add that parent to the done list

    //             markTaskDone();
    //         }
    //         else {
    //             alert(`${event.target.value} is unchecked`);
    //         }
    //     });
    // };