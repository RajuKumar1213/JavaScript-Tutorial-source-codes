/*
Element Selectors:-
1. Single element selector
2. Multi element selector

*/
// 1.single element selector
let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red'// to do red color of the text
element.innerText = 'Raju is a good boy' // to change its innerText.
element.innerHTML = ' <b> Raju is a very good boy</b>'
// console.log(element)

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('div')// it will give first div of the html page
sel.style.color = 'yellow'
console.log(sel);

// 2.Multi element Selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child')); 

Array.from(elem).forEach((element)=>{
    console.log(element);
    element.style.color= 'blue'
})
