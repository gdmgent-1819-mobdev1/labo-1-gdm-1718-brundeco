
function clockBelgium(){

    let d = new Date();
    let hours = d.getHours();
    
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if (hours < 10){
         hours = "0" + hours;
    }
    if (minutes < 10){
         minutes = "0"+minutes;
    }
    if (seconds < 10){
         seconds = "0"+seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(clockBelgium,500);

function clockNewYork(){

    let d = new Date();
    let hoursinb = d.getHours();

    let hours2;
    if(hoursinb>=6){
        hours2 = hoursinb-6
       }else{
           hours2 = hoursinb+18;
       }
    let minutes2 = d.getMinutes();
    let seconds2 = d.getSeconds();
    if (hours2<10){
         hours2 = "0"+hours2;
    }
    if (minutes2<10){
         minutes2 = "0"+minutes2;
    }

    if (seconds2<10){
         seconds2 = "0"+seconds2;
    }

    document.getElementById("hours2").innerHTML = hours2;

    document.getElementById("minutes2").innerHTML = minutes2;
    document.getElementById("seconds2").innerHTML = seconds2;
}
setInterval(clockNewYork,500);