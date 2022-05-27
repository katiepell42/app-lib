var count = 0
ans = document.getElementById('counter-count')

function incrementCounter() {
    count = count + 1;
    ans.innerHTML = count;
    console.log("+1")
}

function decrementCounter() {
    count = count - 1;
    ans.innerHTML = count;
    console.log("-1")
}

function resetCounter() {
    count = 0
    ans.innerHTML = count;
    console.log("=0")
}