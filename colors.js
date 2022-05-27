const colors = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color-color") // Allows you to get the CSS property(??)
const color1 = document.getElementById('color-color1')
const color2 = document.getElementById('color-color2')
const name1 = document.getElementById('color-name1')
const name2 = document.getElementById('color-name2')
const colorname = document.getElementById('color-colorname');
const results = document.getElementById('results')

function changeColors() {
    changeFirstColor();
    changeSecondColor();
}

function changeFirstColor() {
    const colorA = getRandomHex(); // Get random 6-digit hex number
    color1.style.backgroundColor = colorA; // Change first color
    name1.innerHTML = colorA; // Change first name
}


function changeSecondColor() {
    const colorB = getRandomHex(); // Get random 6-digit hex number
    color2.style.backgroundColor = colorB; // Change second color
    name2.innerHTML = colorB; // Change second name
}

function copyFirstColor() {
    results.innerHTML = name1.innerHTML;
}


function getRandomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        index =  Math.floor(Math.random() * hex.length) // Get a random index from the above list
        hexColor += hex[index]
    }
    return hexColor
}
