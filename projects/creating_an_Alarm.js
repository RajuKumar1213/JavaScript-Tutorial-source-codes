console.log('In the file we are going to make An alarm clock');

// Question :- 
// you have to create an alarm clock using javaScript(Use you creativity)


const alarmSet = document.getElementById("alarmSet");
//Add an eventListener to the alarmSet button
alarmSet.addEventListener("click" , setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

// Function to play the alarm ring tone
function ringBell() {
    audio.play();
}
validAlarm = false;
//This function will run whenever the alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    let alarm = document.getElementById("alarm");
    now = new Date();
    alarmDate = new Date(alarm.value);
    console.log(`ring the alarm for ${alarmDate}` )
    alarmToRing = alarmDate - now;
    console.log(alarmToRing);

    if(alarmToRing >= 0){
        setTimeout(() => {
            ringBell();
            console.log('The alarm is ringing..');
            
        }, alarmToRing);
}
}
alarm.addEventListener('blur', ()=>{
    console.log('This is blured');

    let regex = /^([0-9]){4}\-([0-9]){1,2}\-([0-9]){1,2}\s([0-9]){1,2}\:([0-9]){1,2}\:([0-9]){1,2}$/;
    let str = alarm.value;
    if(regex.test(str)){
        alarm.classList.remove('is-invalid');
        validAlarm = true;
    }
    else{
        alarm.classList.add('is-invalid');
        validAlarm = false;
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})


