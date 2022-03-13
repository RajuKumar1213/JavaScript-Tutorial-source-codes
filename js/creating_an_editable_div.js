console.log('Tutorial 21 Exersize 2 JavaScript')

/*
 You have to create o div and inject it into the page which contains a heading

 Whenever someone cliks on the div, it should be converted into as editable item. Whenever user cliks away (blur). Save the note into hte local Storage.
*/
// let Myul = document.getElementById('Myul');
let heading = document.createElement('h1');
let headingText = document.createTextNode('This is the heading');
heading.appendChild(headingText);

heading.className = 'headingClass';
heading.id = 'headingClass';
heading.setAttribute('title' ,' headingTitle');

let container = document.querySelector('.container');
container.appendChild(heading);
console.log(heading)

heading.addEventListener('click' , function(){
    console.log('Clicked on the heading');

})
// this is the bbest moment