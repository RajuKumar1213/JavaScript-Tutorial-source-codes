console.log("Today in this tutorial we are going to learn about the dom- document object model");

let a = document;
a = document.all;
// a = document.body;
// a = document.forms;

Array.from(a).forEach(function(element){
    console.log(element);
})

a = document.links;    

//Question => use document.images and document.script and print the list of images and scripts on an html page.

console.log(a);
