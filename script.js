const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const herBDate = '19 June 2021'

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function countdown(){
    const currentDate = new Date();
    const bDate = new Date(herBDate);

    const Totalseconds = (bDate - currentDate) / 1000;
    const seconds = Math.floor(Totalseconds % 60);
    const mins = Math.floor(Totalseconds / 60) % 60;
    const hours = Math.floor(Totalseconds /  3600) % 24;
    const days = Math.floor(Totalseconds / 3600 / 24);
    console.log(days, hours, mins, seconds);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}


countdown();

setInterval(countdown, 1000);
