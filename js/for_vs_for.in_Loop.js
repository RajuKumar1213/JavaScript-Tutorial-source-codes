console.log('This is the file of for and for in loops');

let people = ['Raju', 'Rajan', 'Rohan', 'Kush', 'Akash', 'SkillF', 'Rahul'];


//THIS SI THE TRADITIONAL FOR LOOP 
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)
// }

//THIS IS THE MODERN FOR IN LOOP

let obj = {
    name: 'Raju',
    language: 'javaScript',
    hobby: 'Android app development'
}

// console.log(obj);
// Iteration an object using the traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element)
// }

// Iterating an object using the for in loop
for(key in obj){
    console.log(obj[key]);
}

//ITERATING A STRING USING FOR IN LOOP
let mySting = "This is my string to iterate";
for(char in  mySting){
    console.log(mySting[char]);
}

// ITERATING A STRING USING THE TRADITION FOR LOOP
// for (let index = 0; index < mySting.length; index++) {
//     const element = mySting[index];
//     console.log(element);
// }

    // ********************FOR OF LOOP**********************

    console.log("****************for of loop starts here***************")
people = ['Raju', 'Rajan', 'Rohan', 'Kush', 'Akash', 'SkillF', 'Rahul'];

for(name of people){
    console.log(name);
}