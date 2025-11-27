let divSession: HTMLElement | null = document.getElementById('session');

let timesArray = localStorage.getItem('sessionsList');
let newTime: string[] = []
if (timesArray) {
    let array: SessionList = JSON.parse(timesArray);

    for (let time of array) {
        let actualDate: Date = new Date(time);
        let pTimes: HTMLParagraphElement = document.createElement('p');
        pTimes.innerText = actualDate.toString();
        if (divSession) {
            divSession.appendChild(pTimes);
        }
    }
} else {
    newTime = []
}

