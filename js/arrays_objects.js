console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(marks);
console.log(mixed);
console.log(fruits[1]); // it will print the first element of this arra
console.log(arr.length); // it will print the length of this array
console.log(Array.isArray('dfdf')); b // return false because this is not an array
arr[0] = 'raju'; // raju will assine as 0th index
let arrelement = arr[0];
console.log('element :', arrelement);
console.log(arr);

let value = marks.indexOf(73); 
console.log(value) //print 4 because 73 is lies at 4th index of an array

//  Mutating or Modifying arrays
marks.push(3564); //it will push in the end of an array
marks.unshift(1009); // it will push it in the starting of an array
marks.pop() // delete one element from the end of an array
marks.shift() // delete one element form starting of an array
marks.splice(2, 3); //delete 3 element starting from index 2
marks.reverse() // it will totally reverse the array
let marks2 = [1, 2, 3, 7]
marks = marks.concat(marks2); // it will concatinate marks2 in the marks in the end of the array
console.log(marks);

//Objects
let myobj = {
    'first name': 'raju',
    channel: 'GetEverything',
    isActive: true,
    marks: [1, 5, 3, 6]
}

console.log(myobj) // It will print total object
console.log(myobj['channel']) // print GetEveryThing
console.log(myobj.channel)// It will also print GetEveryThing

