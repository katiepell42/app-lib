const timer = document.getElementById('stopwatch-display');

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var handle = 0;
// var stoptime = true; // Start the timer off stopped
running = false;

function startTimer() { // If it's not already on, turn it on
    if (running == false) {
        running = true;
    }
    clearInterval(handle);
    handle = setInterval(runTimer, 100)
}

function stopTimer() { // If it's already on, turn it off
    if (running == true) {
        running = false;
    }
}

function runTimer() {
    if (running == true) {
        incrementSecond();
    }
}

function resetTimer() {
    msec = '0';
    sec = '00';
    min = '00';
    hr = '00';
    timer.innerHTML = (hr) + ":" + (min) + ":" + (sec) + '.' + (msec);
}

function incrementSecond() {
    msec = parseInt(msec) + 1
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)

    if (msec == 10) {
        msec = 0;
        sec = parseInt(sec) + 1;
    }

    if (sec == 60) {
        sec = 0;
        min = parseInt(min) + 1;
    }
    if (min == 60) {
        sec = 0;
        min = 0;
        hr = parseInt(hr) + 1;
    }



    if(sec < 10) {
        sec = '0' + sec
    }
    if(min < 10) {
        min = '0' + min
    }
    if(hr < 10) {
        hr = '0' + hr
    }

    timer.innerHTML = (hr) + ":" + (min) + ":" + (sec) + '.' + (msec);
}