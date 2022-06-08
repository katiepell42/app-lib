const colorButtons = document.getElementsByClassName('color-num'); // Get all color # buttons

function listLink() { // Generates a list of links based on currently deployed apps
    const apps = document.querySelectorAll('.app-title'); // Get all elements of class 'app'
    const app_list = document.getElementById('link-list'); // Get the list of app names
    for(const element of apps) {
        let li_element = document.createElement('li'); // Create an li element
        li_element.classList.add('app-name');
        li_element.classList.add('list-group-item');

        let h3_element = document.createElement('h3'); // Create h3 element
        h3_element.classList.add('card-subtitle');
        h3_element.classList.add('heading-6');

        let a_element = document.createElement('a'); // Create 'a' element
        let destination = element.id;
        a_element.href = '#' + destination;

        h3_element.appendChild(a_element); // Add h3 to li element
        li_element.appendChild(h3_element); // Add 'a' to h3 element

        a_element.textContent = element.textContent; // Add title to link text

        app_list.appendChild(li_element); // Add li to list of links
    }
}

function loadPage() {
    // changeColors(); // Change the random colors one time
    // partitions();
    // typeLoop(); // Loop the text transition one time
    listLink(); // Dynamically generate 
}


// document.addEventListener('DOMContentLoaded', function() {
//     for(let element of colorButtons.childNodes) {
//         element.addEventListener('click', makeColors(element.value));
//     }  
// })

