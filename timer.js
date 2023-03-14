/* variables for the timer */
let seconds = 0;
let minutes =0;
let hours = 0;
let start = document.getElementById('start'); 
let pause = document.getElementById('pause');
let reset = document.getElementById('reset'); 
let stopstatus = 0;
/* DOM element to update timer */
let timer = document.querySelector('.timer');





/* function to start the timer */
start.addEventListener('click', ()=>{
    
//start.style.color = "green";
pause.style.color = "black";
reset.style.color="black";
start.style.display ="none";
    if(stopstatus!==0){
        clearInterval(stopstatus);
    }
    stopstatus = setInterval(()=>{
        seconds+=1;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    let h = hours < 10 ? ("0" + hours ): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    timer.innerHTML = ` ${h} : ${m} : ${s}`;
},1000);
});


/* function to pause the timer */
pause.addEventListener('click', ()=>{
    //start.style.color = "black";
    pause.style.color = "orange";
  reset.style.color="black";
  start.style.display ="block";
    
    clearInterval(stopstatus);
});

/* function to reset the timer */
reset.addEventListener('click', ()=>{
  //  start.style.color = "black";
    pause.style.color = "black";
    reset.style.color="tomato";
     start.style.display ="block";
    clearInterval(stopstatus);
    seconds = 0;
    minutes =0;
    hours = 0;
    timer.innerHTML = '00 : 00 : 00 ';
   
});
