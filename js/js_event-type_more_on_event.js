console.log('This is the tutorial 18');

//click

let btn = document.getElementById('btn');

btn.addEventListener('click' , func1);
btn.addEventListener('dblclick' , func2);// this is the double click event
btn.addEventListener('mousedown' , func3);

function func1(e) {
    // console.log("Thank", e);
    e.preventDefault();// By this function the form tag will not submit the code  . The default behavior is to submit the form whenever clicked on the buttom
}

function func2(e) {
    console.log("Thanks this is the double click", e);
    e.preventDefault();
}

function func3() {
    console.log('Wow! finally its a mousedown to me')
}

// Mouseenter and Mouseleave

no = document.querySelector('.no');
no.addEventListener('mouseenter' , function(){
    console.log('Mouse on  no')
})

no.addEventListener('mouseleave' , function(){
    console.log('Mouse exited no')
})

// Mouse Move
container = document.querySelector('.container');
container.addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.clientX} , ${e.clientY} ,255)`;

});