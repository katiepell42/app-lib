var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var stopwatchFlag = false; // Flag to determine current state of stopwatch

function startStopwatch() {
    var timeStart = new Date; // Original start time
    
    if(!stopwatchFlag) {
        stopwatchFlag = true; // Mark the stopwatch as being "currently running"
        setInterval(function() {
            seconds = parseInt(seconds);
            minutes = parseInt(minutes);
            hours = parseInt(hours);
            var timeNow = new Date; // Current time
            let difference = (timeNow - timeStart)/1000; // Gives the difference --> seconds is diff / 100, ms is (diff % 100)/100
            seconds = (difference % 60).toFixed(1); // Keep it with one decimal places
            minutes = Math.floor(difference / 60);
            if(seconds > 10) {
                difference = difference / 10;
            }
            if(seconds < 10) {
                seconds = '0' + seconds;
            }
            if(minutes < 10) {
                minutes = '0' + minutes;
            }
            if(minutes < 10) {
                hours = '0' + hours;
            }        
    
            document.getElementById('stopwatch-display').innerHTML = hours + ':' + minutes + ':' + seconds;
        }, 100);
    }
}
