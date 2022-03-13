//Ragular experssion is used to Search any words in the web page by the programming
console.log('This is the tutorial of Ragular experssion');

let reg = /raju/  //--> This is a regular expression literal in js
reg = /raju/g  //--> g mean global
// reg = /Raju/i  //--> i means case insensitive

// here "g" means global,If we use this then how much time we run the exec funtion then it well return index of next Ragular name i.e /Raju/


console.log(reg);
console.log(reg.source);

let str = "this is the great code with raju And also raju bhai"
// Function to match the expression
// 1. exec() - This function will return an array for match and null for no match

let result = reg.exec(str);
console.log(result)
console.log(result.input);
console.log(result.index);


//  result = reg.exec(str);
// console.log(result) ---> We can multiple exec with the global flag

//  result = reg.exec(str);
// console.log(result)//This will return null because "Raju" is no more in the string


// 2. test() -If match return true and if not then return  false
let test = reg.test(str);
console.log(test);

// 3. match() - It will return an array of results or null
// let match = reg.match(str);// This is wrong
match = str.match(reg);
console.log(match);

// 4. search() - return index of first match else -1
// let serach = reg.search(str); // This is the worng syntax
let search = str.search(reg); // this is right
console.log(search)


//5. replace() - Returns new raplaced string with all the replacements (if no flag is given ,first match will be replaced)
let replace = str.replace(reg,'Akash');
console.log(replace)

