let time = 0;
let interval = null;

const display = document.getElementById('stopwatch-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    if (time %3 == 0){
        display.textContent = time;
    }
}

function startTimer() {
    time=0;
    updateDisplay();
    if (interval === null && time < 30) {
    interval = setInterval(() => {
        time += 3;
        if (time > 30) {
        time = 30;
        clearInterval(interval);
        interval = null;
        }
        updateDisplay();
    }, 1000);
}}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    
}

function resetTimer() {
    stopTimer();
    time = 0;
    updateDisplay();
}

updateDisplay();