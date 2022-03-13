console.log("We Are in tutorial 16. for making a website");

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// adding class name to the li element
element.className = 'childul';
element.id = 'createdli';
element.setAttribute('title' ,'mytitle') //to set attribute

// element.innerText = '<b>Hello this is created text by raju</b>'// it will printed as it is
// element.innerHTML = '<b>Hello this is created text by raju</b>'//it will add as a html code


// let ul = document.querySelector('ul.this');
// ul.appendChild(element);// to push a child into the ul, this we use appendChild
console.log(ul)
console.log(element);

//Raplace Element
let elm2 = document.createElement('h3');
elm2.id = 'elem2';
elm2.className = "elemClass";
let tnode = document.createTextNode('This is the createdTextNode for elem2');
elm2.appendChild(tnode); //we have putted tnode in elm2
element.replaceWith(elm2);//We are replacing element with elm2

let  Myul = document.getElementById('Myul');
Myul.replaceWith(element,document.getElementById('fli'));
// Myul.removeChild(document.getElementById('lli'));

let Ga = elm2.getAttribute('id');
Ga = elm2.getAttribute('class');
Ga = elm2.hasAttribute('class'); // if class Attribute is available then it will return true if not then return false

elm2.removeAttribute('id');// it will remove the id Attribute
console.log( elm2,Ga)

// Question  :- create a heading with text as "Go to the github.com" and create an a tag outsite it with href ="https://github.com".


