console.log("This is the tutorial of Character in ragular expression");
// Regular Expression
    // 1. Basic Function
    // 2. Metacharacters Symbol

// 3. Character sets, we use-[]

let regex = /R[rty]ju/; //-->Can be r,t and y 
regex = /R[a-z]ju/; // can be any from a to z;
regex = /R[^rty]ju/; //-->if any is there then it will not matcj because of ^
regex = /R[a-zA-Z]j[u0-9]/;//---> Small a to z and A to Z and then u , 0 to 9

//Quantifiers we use - {}

regex = /ra{2}ju/; // 'a' can occur exactly 2 times
regex = /ra{0,2}ju/; // 'a' can occur exactly 0 ot 2n (0 or 1 or 3) times
// const str = "Raj9 bhai";

// Groupings :- We use pranthesis for grouping ()
regex = /(ra){2}/
regex = /(ra){2}ju([0-9]r){2}/
let str = "raraju9r9r bhai";

let result = regex.exec(str);
console.log("The result form exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches from the expression ${regex.source}`);
}