// Variables fro buttons

const startStopBtn = document.querySelector('#startStopBtn');
const reset = document.querySelector('#resetBtn');


// Variables for time value

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable for leading zeros

let leadingSeconds = 0;
let leadingminutes = 0;
let leadinghours = 0;


// Variables for set intervales && timer status

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function

function stopWatch(){
    seconds++

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = seconds < 10 ? "0"+seconds.toString() : seconds;
    leadingminutes = minutes < 10 ? "0"+minutes.toString() : minutes;
    leadinghours = hours < 10 ? "0"+hours.toString() : hours;


    let displayTimer = document.getElementById('timer').innerText = leadinghours + ":" + leadingminutes + ":" + leadingSeconds;

    
}

// window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})
   
reset.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
     hours = 0;
     document.getElementById('timer').innerText = "00:00:00"
})