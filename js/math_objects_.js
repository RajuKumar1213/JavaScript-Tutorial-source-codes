console.log('Welcome to the tuturial number 23')

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;// 2.718281828459045 this is the oilers number
z = Math.round(6.2)// it will return 5 because .2 in lessthan 5
z = Math.round(6.5)// it will return 7 because if 5 and more than 5 then it takes higher
z = Math.ceil(3.2);// It will return 4 because ceil function always takes the high number
z = Math.floor(4.6);// it will return 4 because floor it return from the lowest
// Genetating the random numbers
z = 100*Math.random();// It will generate the random numbers between the 1 and 100.
z = 50 + (100-50)*Math.random();// It will generate the random numbers between the 50 and 100
z = Math.ceil(50 + (100-50)*Math.random());// It will generata the random numbers between the 50 to hundred and it will return integers number without any decimals
console.log(z)