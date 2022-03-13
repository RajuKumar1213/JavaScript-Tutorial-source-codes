// let screen = document.getElementById("screen");
// let buttons = document.querySelectorAll("button");
// // console.log(buttons)
// let screenValue = "";
// for(item of buttons){
//     item.addEventListener("click", (e)=>{
//         buttonText = e.target.innerText;
//         console.log("The text of the button is,", buttonText)

//         if(buttonText =='X'){
//             screenValue += '*';
//             screen.value = screenValue;
//         }
//         else if(buttonText == 'C'){
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if(buttonText == "="){
//             screen.value = eval(screenValue)
//         }
//         else{
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if (buttonText == 'X') {
            screenValue += '*';
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screeValue = buttonText;
            screen.value = eval(screenValue);//here eval means evaluate whatever is given 
        }
        else if(buttonText =='back'){
            screenValue += buttonText.substring()
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}