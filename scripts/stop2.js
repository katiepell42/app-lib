// var startTime;
// var stopwatchFlag;
// var difference;

// function startTimer() {
//     if(stopwatchFlag) { // If the timer has already been stopped once
//         difference = 
//     }

//     else {
//         startTime = Date.now(); // Assign the starting time
//     }
    

// }

// function stopTimer() {
//     stopwatchFlag = true;
// }


// function resetStopwatch() {
//     stopwatchFlag = false; // Set the timer to have restarted
// }



// // Click start --> NOTE TIME AS startTime
// // Every millisecond, display now time - startTime
// // When you hit stop, turn flag to true, stop running the interval
// // When you hit start, 

var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;

function startTimer() {
    var timeStart = new Date; // Original start time
    setInterval(function() {
        var timeNow = new Date; // Current time
        var sec = (timeNow - timeStart)/1000; // Gives the difference --> seconds is diff / 100, ms is (diff % 100)/100


        
        if(sec > 10) {
            min += 1;
            sec = 0;
        }
        document.getElementById('timeOpen').innerHTML = min + ':' + sec;
            // Math.floor(hr) + ':' + Math.floor(min) +':' + Math.floor(sec) + '.' + Math.floor(ms);
    }, 100);
}
