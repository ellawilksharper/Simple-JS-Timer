let startTiming = 0.2
let time = startTiming * 60
let isNegative = false;

const count = document.getElementById("countdownTimer")
setInterval(updateTimer,1000)

function updateTimer() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--;
    time = time < 0 ? 0 : time; 
}



