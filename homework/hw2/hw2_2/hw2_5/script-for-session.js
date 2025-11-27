"use strict";
let divSession = document.getElementById('session');
let timesArray = localStorage.getItem('sessionsList');
let newTime = [];
if (timesArray) {
    let array = JSON.parse(timesArray);
    for (let time of array) {
        let actualDate = new Date(time);
        let pTimes = document.createElement('p');
        pTimes.innerText = actualDate.toString();
        if (divSession) {
            divSession.appendChild(pTimes);
        }
    }
}
else {
    newTime = [];
}
