console.log("In this tutorial we are going to make a digial clock website")

function updateClock(){
    // get the new currentTime
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    //  if hour is less than 12 set "AM" other wise set "PM"
    let timeInAmPm = (currentHour < 12) ? "AM" :"PM";

    // pad 0 if minute and second is less than 10 (single digit)
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;

    // Creating the time String
    let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeInAmPm;
    
    
    document.getElementById("time").innerHTML = currentTimeStr;
}


setInterval(() => {
    updateClock();
}, 1000);