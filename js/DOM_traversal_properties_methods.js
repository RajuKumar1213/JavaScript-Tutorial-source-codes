console.log('This is the tutorial 15');

let no = document.querySelector('.no');
// console.log(cont);

let cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName; // it will give H1 because the second node of the container
let nodeType = cont.childNodes[1].nodeType; // it will give numbers like 1 -10.
// console.log(nodeName)
// console.log(nodeType)
// console.log(cont.childNodes);
// console.log(cont.children);

// Node Types
// 1. Element
// 2. Attribute
// 3. Text node
// 8. Comment
// 9. Document
// 10. Doctype

let container = document.querySelector('div.container');
// console.log(container.children)
console.log(container.children[1].children[0].children)// to get children of the children fo children and so on..

// console.log(container.children);//count of child elements
// console.log(container.firstChild);//it will give text
// console.log(container.firstElementChild); // it will give first element


console.log(container.firstElementChild.parentNode);// to know who is it's parent
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);//this is chaining to get the next sibling of next sibling


