console.log('This is tut 20. We are to read about the LocalStorage of chrome browser');
//Adding array to the Local Storage
let impArray = ['Adrak','Pyaz','Tamatar','Dhaniya','Lahsun'];


// Add a key value pairs inside the localStorage
localStorage.setItem('Name' , 'Raju'); // here Name stands for key of the localStorage
localStorage.setItem('Name2' , 'Rajan')// and Raju is the value of that key
localStorage.setItem('Name3' , 'Rahul')
localStorage.setItem('Sabji', JSON.stringify(impArray));

//Clears the entire localstorage
// localStorage.clear(); 

//Cleat a particular key-value pair
localStorage.removeItem('Name');

// Retrieve an item from the local Storage 
let name = localStorage.getItem('Name');
console.log(name);

let name2 = localStorage.getItem('Name2');
console.log(name2)

let name3 = localStorage.getItem('Name3');
console.log(name3)

let sabji = JSON.parse(localStorage.getItem('Sabji'));
console.log(sabji);

// NOTES
// JSON.stringify('Array') // => It takes an array as an argument and return a string
// JSON.parse('')// => It take string as an argument and return an Array   

// Setting the key-value pair in the sessions storage 
sessionStorage.setItem('sessionName' , 'Raju');
sessionStorage.setItem('sessionName2' , 'Rajan')
sessionStorage.setItem('sessionName3' , 'Rahul')
//Everything will be clear after restart the browser