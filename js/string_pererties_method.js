console.log('We are at tut 6');
const name = 'Raju';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


console.log(html[1]);
console.log(html.indexOf('<'));   //To find the index of < this icon
console.log(html.lastIndexOf('<'));  // the index of this icon (<) from the last and index start from 0 this is obvious
console.log(html.charAt(3));   // It will print the 3rd character of the array
console.log(html.endsWith('dsfsdfd')); // return false ,because doesn't end with 'dsfsdfd'
console.log(html.includes(' fg'));  //return false, because it is not abvilable in the origainal string
console.log(html.substring(1,6)); // it will print the character start with index 1 and ends with index 5. n to n-1
console.log(html.slice(-4)) //It will print last four character
console.log(html.slice(0,6)) //it will print 0 to 6 index character
console.log(html.split('>'));// it will break into pieces where this character lies in a string and convert them into an array.
console.log(html.replace('this', 'it')); // it will replace this into it and It will replace only first occurence

let fruit1 = 'Orange\'';// this syntax  is to use single cote and double cotes
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is my heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            
//We can write javaScrit code without concatinate and it will reflect in our html webpage.And this feature makes it very cool.
