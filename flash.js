var i = 0;                  //  set your counter to 1
const flashResult = document.getElementById('library-title')
// const flashResult = document.querySelector('.card-title')
var curr = ["|", "", "|"]
var all = [];
const testString = flashResult.textContent;

function partitions() {
    for(let j = 0; j < testString.length; j++) { // First half, add to curr
        curr.push(testString.slice(0, j));
        curr.push(testString.slice(0, j) + '|');
    }
    curr.push(testString);    

    // curr.push(testString + '|');    
    // curr.push(testString);    
    // curr.push(testString + '|');    
    // curr.push(testString);    

}

function typeLoop() {         //  create a loop function
    console.log('typeloop')
    // i = 0;
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    flashResult.textContent = curr[i];
    console.log(curr[i])
    i++;                    //  increment the counter
    if (i < curr.length) {           //  if the counter < 10, call the loop function
        typeLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 100)
}

function reTypeLoop() {
    i = 0;
    typeLoop();
}


function loadPage() {
    changeColors(); // Change the random colors one time
    partitions();
    typeLoop(); // Loop the text transition one time
}