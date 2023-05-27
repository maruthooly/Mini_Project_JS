const timeEL = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetbtn = document.querySelector(".reset");
//1000 ms = 1s , 60s => 1m , 60 m => 1h
let [milliseconds,second,minutes,hour] = [0,0,0,0];   

let timer = null;
let displayTime = ()=>{
    milliseconds += 10
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            second = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hour++;
            }
        }
       
    }

    //
    let h = hour<10 ? "0"+hour : hour
    let m = minutes<10 ? "0"+minutes : minutes
    let s = second<10 ? "0"+second : second
    let ms = milliseconds<10 ? "0"+milliseconds : milliseconds
    timeEL.innerHTML= `${h}:${m}:${s}:${ms}`
}
let startTimer = ()=>{
    if(timer != null){
        clearInterval(timer)
    }
    timer = setInterval(displayTime,10)
}
let pauseTimer = ()=>{
    clearInterval(timer);
}
let resetTimer = ()=>{
    clearInterval(timer);
    [milliseconds,second,minutes,hour] = [0,0,0,0];   
    timeEL.innerHTML= `00:00:00:000`
}

startBtn.addEventListener("click",startTimer)
  
pauseBtn.addEventListener("click",pauseTimer)

resetbtn.addEventListener("click",resetTimer)