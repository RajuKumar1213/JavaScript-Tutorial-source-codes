console.log("This the arrow function tutrial");

// Creating the normal function
// const Raju = function(){
//     console.log("This is the normal function");
// }
// Raju();

// Creating the arrow function
const Raju = ()=> {
    console.log("This is the arrow functioin");
}
Raju();//this is the function call. If we not call the function then the function will not run

//Creating a function which returns something
// const greet = ()=> {
//     return "good Morning";

// }
// console.log(greet());


// One liers do not require curli brase/return
// one line will automatically return
// const greet = ()=> " Good morning";
// console.log(greet());


// Single parameter do not need parenthesis
//  But You will have to put parenhesis if there are multiple parameters
const  greet = (name , ending)=> "Good moring " + name + ending;
console.log(greet("Raju", " Bye"));
