let min = 0;
let sec = 0;
let misec = 0;

let getMin = document.getElementById('min');
let getSec = document.getElementById('sec');
let getMisec = document.getElementById('misec');


function timer(){
    misec++;
    getMisec.innerHTML = misec;
    
    if(misec >= 100){
        sec++;
        getSec.innerHTML = sec;
        misec = 0;
    }
    else if(sec >= 60){
        min++;
        getMin.innerHTML = min;
        sec =0;
    }
}

function start(){
    interval= setInterval(timer,10);
    document.getElementById('start').disabled=true;
}

function stop(){
    clearInterval(interval);
    document.getElementById('start').disabled=false;
}

function reset(){
    min = 0;
    sec = 0;
    misec = 0;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMisec.innerHTML = misec;
    stop();
}