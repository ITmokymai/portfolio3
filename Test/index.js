let skip = document.getElementById('skip');
let score = document.getElementById('score');
let totalScore = document.getElementById('totalScore');
let countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll('.set');
let qaAnsRow = document.querySelectorAll('.set .ans_row input');
let stop = document.getElementById('stop');

function showStopButton(){
    stop.style.display = 'inline-block';
};

function hideStopButton(){
    stop.style.display = 'none';
};

skip.addEventListener('click', function(){
    step();
    duration = 10;
});



qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            duration = 10;
        },500)
        let valid = this.getAttribute('valid');
        if(valid == 'valid'){
           scoreCount +=20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }else{
           scoreCount -=20; 
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
});

function step(){
    count += 1;
    if(count === qaSet.length){
       skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
        showStopButton();
        return;
       };
    hideStopButton();
    for(let i = 0; i < qaSet.length; i++){
        qaSet[i].className = 'set';
    }
    qaSet[count].className = 'set active';
    if(count == 5){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }   
};

let durationTime = setInterval(function(){
    if(duration == 10){
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == '10'){
        step()
    }
},1000);











