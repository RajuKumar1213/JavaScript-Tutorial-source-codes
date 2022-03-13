console.log("This is the Tutorial of short hand classes of Ragular Expression");

let regex = /\wju/;     // \W means Words character = _ alphabet or number
regex = /\w+cse/;       // \w+ mean one or more  word character
regex = /\Wbhai/;       // \W Non word cahracter
regex = /\W+codding/;   // \W+ mean More than one Non word character
regex = /\d999/;        // \d means digit
regex = /\d+92/;        // \d+ means more than one digit
regex = /\D999/;        // \D means non digit character
regex = /\D+999/;       // \D+ means more than one Non digit character
regex = /\ska number/;  // \s Means match whitespace character
regex = /\s+ka number/  // \s+ means Match more than one whitespace character
regex = /\Sraju/        // \S means Non white space character
regex = /\S+raju/       // \S+ means More than one Non white space character
regex = /3cse\b/;       // \b means word boundry


//Assertions
regex = /r(?=a)/;       // must be only 'a' after r
regex = /r(?!a)/;       //  Must not be 'a' after r
let str = "Raj%u1213cse is the best coddingriju bhai ka number 45rpju Vishwakarma999546953892";

let result = regex.exec(str);
console.log("The result of the regex is:", result);
if (regex.test(str)) {
    console.log(`The string : ${str} matched with the expression ${regex.source}`);
}
else {
    console.log(`The string : ${str} does not matched with the expression ${regex.source}`);
}
