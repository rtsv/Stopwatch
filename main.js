// var [minute, second, milisecond] = [0,0,0];
window.onload = function start() {
    clearInterval(interval);
    interval = setInterval(mainTime, 10);
}

var minute = 0;
var second = 0;
var milisecond = 0;

var interval = null;



function start() {
    clearInterval(interval);
    interval = setInterval(mainTime, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    minute=second=milisecond=00;
    document.getElementById("minute").innerHTML=0;
    document.getElementById("second").innerHTML=0;
    document.getElementById("milisecond").innerHTML=0;

}

function mainTime() {
    milisecond += 9;
    if(milisecond<=9)
    {
        document.getElementById("milisecond").innerHTML = "0" + "0" + milisecond;
    }
    else if (milisecond >9 && milisecond <99)
    {
        document.getElementById("milisecond").innerHTML = "0" + milisecond;
    }
    else
        document.getElementById("milisecond").innerHTML = milisecond;
    if(milisecond == 999)
    {
        milisecond = 0;
        second ++;
        if(second<=9)
        {
            document.getElementById("second").innerHTML = "0" + second;
        }
        else
            document.getElementById("second").innerHTML = second;
        if(second == 60)
        {
            second = 0;
            minute++;
            if(minute<=9)
            {
                document.getElementById("minute").innerHTML = "0" + minute;
            }
            else
                document.getElementById("minute").innerHTML = minute;
        }
    }
}



// function onmousetime() {
//     document.getElementById("time").innerHTML = new Time();
// }

// function outmousetime() {
//     document.getElementById("time").innerHTML = "Time";
// }

function mouseoverTime() {
    const date = new time();
    document.getElementById("time").innerHTML = date;
}

// function mouseoutTime() {
//     document.getElementById("time").innerHTML = "Time";
// }