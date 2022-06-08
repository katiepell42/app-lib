const colorDisplay = document.getElementById('color-display');



function getRandomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        index =  Math.floor(Math.random() * hex.length) // Get a random index from the above list
        hexColor += hex[index]
    }
    return hexColor
}


function colorTest() {
    // const numColors = document.getElementById('select-color-num').value
    // console.log(numColors);
    console.log(this.textContent)
}

function makeColors(n) { // Create the appropriate number of color slots (large buttons)
    colorDisplay.innerHTML = ""; // Clear all the old ones
    for(let i = 0; i < n; i++) {
        let btn = document.createElement('button'); // Create a new button
        btn.classList.add('color-btn'); // Assign class

        let h2 = document.createElement('h2'); // Create a new h2 element
        h2.classList.add('color-name'); // Assign class

        btn.appendChild(h2); // btn > h2

        colorDisplay.appendChild(btn); // div > btn

        btn.addEventListener('click', function() {
            let color = getRandomHex();
            btn.style.backgroundColor = color;
            h2.textContent = color;
        })

        let currWidth = 100 / n;
        btn.style.width = currWidth + '%';

        let color2 = getRandomHex();
        btn.style.backgroundColor = color2;
        h2.textContent = color2;
    }
}







//                 <button class="color-btn" id="color-color1" onclick="changeFirstColor()">
//                     <h2 id="color-name1" class="color-name"></h2>
//                 </button>
//                 <button class="color-btn" id="color-color2" onclick="changeSecondColor()">
//                     <h2 id="color-name2" class="color-name"></h2>
//                 </button>