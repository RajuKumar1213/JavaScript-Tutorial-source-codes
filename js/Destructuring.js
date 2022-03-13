console.log("This is the tutorial of Destructuring in javaScript ")

// Destructuring in JavaScript
let a, b;
[a , b] = [34, 454];
console.log(a , b);

[a , b , c , ...d] = [1,2,3,4,5,6,7,8,9,10, 12, 13, 14];
console.log(a , b , c , d);

// This is an array destructuring
({a,b,c , ...d} = {a:34, b:45, c:83, d:2 , e:676, f:78});
console.log(a, b , c, d )

const fruits = ['Apple', 'Bananas', 'Mangoes', 'Grapes', 'PineApple'];
[a, b, c , ...d] = fruits;
console.log(a, b , c , d)

//Object destructuring
const laptop = {
    model: "HP pavilion",
    age:"6 years", 
    batteryLife: "6 hours", 
    gender:"male",
    net: 2344,
    start: function(){console.log("Strted")}
}

const {model, age, batteryLife, gender , net, start} = laptop;
console.log(model, age, batteryLife , gender , net, start);
start();
