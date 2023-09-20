const dayElement = document.getElementById('days');  
const hoursElement = document.getElementById('hours');  
const minsElement = document.getElementById('mins');  
const secondsElement = document.getElementById('seconds');  

const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = ((newYearsDate - currentDate) / 1000);
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) %24;
    const mins = (Math.floor(totalseconds / 60)) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    dayElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
console.log(secondsElement);
countdown();
setInterval(countdown,1000)