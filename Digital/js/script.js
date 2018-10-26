
function timeInBelgium(){

    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if (hours < 10){
         hours = '0' + hours;
    }
    if (minutes < 10){
         minutes = '0' + minutes;
    }
    if (seconds < 10){
         seconds = '0' + seconds;
    }

    document.getElementById('hours-be').innerHTML = hours + ' : ';
    document.getElementById('minutes-be').innerHTML = minutes + ' : ';
    document.getElementById('seconds-be').innerHTML = seconds;
}

setInterval(timeInBelgium, 600);

function timeInNewYork() {

    let d = new Date();
    let timeBe = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hours;

    if (timeBe >= 6) {
        hours = timeBe -6;
       } else {
        hours = timeBe + 18;
    };

    if (hours < 10) {
        hours = '0' + hours;
    };

    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    if (seconds < 10) {
        seconds = '0' + seconds;
    };

    document.getElementById('hours-ny').innerHTML = hours + ' : ';
    document.getElementById('minutes-ny').innerHTML = minutes + ' : ';
    document.getElementById('seconds-ny').innerHTML = seconds;
}

setInterval(timeInNewYork, 600);




