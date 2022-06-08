// Used in addNewTaskToList()
const inputField = document.getElementById("todo-new-task");
const pendingList = document.getElementById("todo-list-pending");

function clearInputField() {
    inputField.value = '';
}

// Used in addNewTaskToList()
function createNewTask() {
    const todoItem = document.createElement("div"); // Create a div for the list item
    todoItem.classList.add('form-check');
    todoItem.classList.add('todo-item');

    const myCheckbox = document.createElement("input"); // Create checkbox input
    myCheckbox.type = 'checkbox';
    // myCheckbox.id = 'flexCheck1';
    myCheckbox.classList.add('form-check-input');
    myCheckbox.value = '';
    todoItem.appendChild(myCheckbox); // Add it to the list item div

    const myLabel = document.createElement("label"); // Create checkbox label
    myLabel.classList.add('form-check-label');
    myLabel.for= "flexCheck1"; // Must match the id value of the checkbox element
    todoItem.appendChild(myLabel); // Add it to the list item div

    const inputText = document.getElementById("todo-new-task").value // Write task out
    if(inputText == "") {
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



document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type=checkbox][class=form-check-input]');
 
    for (var checkbox of checkboxes)
    {
        checkbox.addEventListener('change', function(event) // Whenever the checkbox changes
        {
            if (event.target.checked) {
                // alert(`${e.target.value} is checked`);
                markTaskDone();
            }
            else {
                alert(`${event.target.value} is unchecked`);
            }
        });
    }
}, false);