console.log("In this file we are going to learn about the symbols in javaScript");

// SYMBOLS
const sym1 = Symbol('My identifier');
console.log("Symbol is :", sym1);
console.log("The type of Symbol is :", typeof sym1);

let a = 'this is Raju';
let b = 'this is Raju';
console.log(a===b);
console.log(null === null);
console.log(undefined === undefined);


const k1 = Symbol('This is the identifier for k1');
const k2 = Symbol('This is the identifier for k2');
const myObj = {};
myObj[k1] = 'Raju';
myObj[k2] = 'Vishwakarma';
myObj["name"] = 'Raju is a good boy';
myObj[4] = 'good integer';

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); //!!ALERT!!: cannot do this to get vishwakarma bacause it is same as myObh["k2"]

// Iterate the myObj by using for in loop
//Symbols are ignored in for in loop
for (key in myObj){
    console.log(key, myObj[key]);
}

//to convet an object to sting
const myJson = JSON.stringify(myObj);
console.log(myJson)