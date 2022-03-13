console.log(' This is the tutorial number 25 in this tutorial we are going to solve the exercise number 1');
/*
 You have to create o div and inject it into the page which contains a heading

 Whenever someone cliks on the div, it should be converted into as editable item. Whenever user cliks away (blur). Save the note into hte local Storage.
*/

let divElem = document.createElement('div');
// Add text to that created element

let val = localStorage.getItem('text');
let text;
if(val == null){
     text = document.createTextNode('This is my element.Click to edit it');
    
}
else{
    text = document.createTextNode(val);

}

divElem.appendChild(text);
divElem.id = 'elemId';
divElem.className = 'divElemClass';
divElem.setAttribute('style', 'border:2px solid black; width:154px; margin: 12px; padding:34px;');

// Grab the main container
let container = document.querySelector('div.container');
let first = document.getElementById('first');

// Insert the element before the element with id first
container.insertBefore(divElem,first);//divElem will be set before the first


console.log(divElem, container, first);

// Add event listener to the divElem
divElem.addEventListener('click', function(){
    let noTestArea = document.getElementsByClassName('textArea').length;
    if(noTestArea == 0){
    let html = divElem.innerHTML;
    divElem.innerHTML = ` <textarea class="form-control textArea" id="textArea" aria-label="With textarea" style="font-width:inherit;">${html}</textarea>`; 
    }

    // listen for the blur event on the textArea
    let textarea = document.getElementById('textArea');
    textarea.addEventListener('blur',function(){
        divElem.innerHTML = textarea.value;   
        localStorage.setItem('text' , textarea.value);
    })
})

// exercise number 1');
/*
 You have to create o div and inject it into the page which contains a heading

 Whenever someone cliks on the div, it should be converted into as editable item. Whenever user cliks away (blur). Save the note into hte local Storage.
*/
