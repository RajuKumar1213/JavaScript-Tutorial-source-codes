console.log("This is the tutorila of async await");

async function Raju(){
    console.log("Inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log("before the response");
    const users = await response.json();
    console.log("resolved users");
    return users;

}
console.log("Before calling the function");
let a = Raju();
a.then(data=>console.log(data))
console.log("After calling the function");
console.log("Last line of this js file");