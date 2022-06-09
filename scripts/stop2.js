var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startStopwatch() {
    var timeStart = new Date; // Original start time
    setInterval(function() {
        seconds = parseInt(seconds);
        // minutes = parseInt(minutes);
        // hours = parseInt(hours);
        var timeNow = new Date; // Current time
        let difference = (timeNow - timeStart)/1000; // Gives the difference --> seconds is diff / 100, ms is (diff % 100)/100
        seconds = difference % 60;
        minutes = Math.floor(difference / 60);
        if(seconds > 10) {
            difference = difference / 10;
        }
        // let secondS = '0' + seconds.toFixed(1);
        let secDisplay = seconds.toFixed(1);
        let minDisplay = minutes;
        let hrDisplay = hours;
        if(seconds < 10) {
            secDisplay = '0' + seconds.toFixed(1);
        }
        if(minutes < 10) {
            minDisplay = '0' + minutes;
        }
        if(minutes < 10) {
            hrDisplay = '0' + hours;
        }        

        document.getElementById('stopwatch-display').innerHTML = hrDisplay + ':' + minDisplay + ':' + secDisplay;
    }, 100);
}
