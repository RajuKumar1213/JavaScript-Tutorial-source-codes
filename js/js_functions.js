console.log("This is the tute 10, And in this tutorial we will learn about the javaScript function");
 // It is recomended to always use let and const date types
let i = 234;
function Ai(name){
    let i =90;
    return `This is the ${name} Ai`;
}
console.log(Ai("Raju"),i);


function greet(name  ){
    console.log(`Good morning My best friend ${name}. How are you these days .By the mercy of god I am living happy here and i hope you are also living happy there . To i am writing the letter because finally i learnt javaScript totolly though the youtube channel codewith harry.`);
    return 3;
}

// It can return a entire string
function message(name){
    let msg = `Good morning My best friend ${name}. How are you these days .By the mercy of god I am living happy here and i hope you are also living happy there . To i am writing the letter because finally i learnt javaScript totolly though the youtube channel codewith harry. `;
    return msg;

}
 // We can make a function in a variable 
 let myGreet = function (name , thank){
    console.log(`Good morning My best friend ${name}. How are you these days .By the mercy of god I am living happy here and i hope you are also living happy there . To i am writing the letter because finally i learnt javaScript totolly though the youtube channel codewith harry.${thank} `);
 }
const name = 'Raju';
const name2 = 'Rajan';

// greet(name , 'Thank you a lot'); // this is function call after giving an argument

// let val = greet(name2 , 'Thank you a lot');
// console.log(val)

let val = message(name);
// console.log(val)

// myGreet(name , 'Thank you a lot');

const myObj = {
    name:"Raju",
    game: function(){
        return "PUBG";
    }
}

// console.log(myObj.game());

arr = ['raju' , 'Software' , 'engineer' , 'banega'];
arr.forEach( function(element, index , array) {
    // console.log(element, index , array); // We can see element , index and array in the console
});