"use strict";
let intervalID;
let isRunning = 0;
let ms = 0;
let s = 0;
let m = 0;
const stopwatch_div = document.getElementById('stopwatch');
function putTimeIntoHTML() {
    if (!stopwatch_div) {
        return;
    }
    const time_string = `${(m < 10 ? '0' : '') + m}:${(s < 10 ? '0' : '') + s}:${(ms < 10 ? '0' : '') + ms}`;
    stopwatch_div.innerHTML = time_string;
}
function updateTimer() {
    // check if we need to do any rollovers
    if (ms == 100) {
        s += 1;
        ms = 0;
    }
    if (s == 60) {
        m += 1;
        s = 0;
    }
    // increment the millisecond counter
    ms += 1;
    // update the HTML with new time string
    putTimeIntoHTML();
}
function start() {
    if (isRunning == 0) {
        intervalID = setInterval(updateTimer, 10);
        isRunning++;
    }
    else {
        return;
    }
}
function stop() {
    isRunning = 0;
    clearInterval(intervalID);
}
function reset() {
    stop();
    ms = 0;
    s = 0;
    m = 0;
    putTimeIntoHTML();
}
function OnPageLoad() {
    const start_btn = document.getElementById('stopwatch-start');
    if (!start_btn) {
        return;
    }
    start_btn.addEventListener('click', start);
    const stop_btn = document.getElementById('stopwatch-stop');
    if (!stop_btn) {
        return;
    }
    stop_btn.addEventListener('click', stop);
    const reset_btn = document.getElementById('stopwatch-reset');
    if (!reset_btn) {
        return;
    }
    reset_btn.addEventListener('click', reset);
}
OnPageLoad();
