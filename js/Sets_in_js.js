console.log("This is the tutorial of sets in javaScript We will go though this file");

// Set stores unique values
const mySet = new Set();// Initialize an empty set
console.log("The set looks like", mySet);

//We can set any type of things in the Set, It can be store integers, string , numbers, booleans, and whatEver
mySet.add("this");
mySet.add("My name");
mySet.add("This2");
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add("this");//This cannot be add in the mySet because the set stores the unique values
console.log("The set looks like now ",mySet);

console.log("The size is :", mySet.size)
console.log()

let mySet2 = new Set([1, 33,'this', false, {a:34, b:344}, 'this']);
console.log("The new set is", mySet2);

console.log(mySet2.has(12));


//Removal of element from a set
console.log("Before removal", mySet);
mySet.delete('This2')
console.log("After removal", mySet);


// Iterating a set using for of loop
// for(items of mySet){
//     console.log("the item is:", items);
// }

// Iterating a set using the for Each loop
mySet.forEach((items)=>{    
    console.log('itmes is: ', items);
})

//Converting  a set into an array
let myArray = Array.from(mySet);
console.log(myArray);

// Converting an array into a set
let newSet = new Set(myArray);
console.log(newSet);