console.log('We are here in tut17 to learn about the event in javaScript');

//Events in js

heading = document.getElementById('heading');
heading.addEventListener('click' , function(e){
    console.log('you have clicked to the heading');
    let variable;
    variable = e.target;// it will print all the html code that is the target
    // variable = e.target.className;
    // variable = Array.from(e.target.classList);

    // variable = e.target.id; // by this we cab grab the id of heading
    // variable = e.offsetX;
    // variable = e.offsetY;
    // variable = e.clientX;
    // variable = e.clientY;
    // console.log(e);
    console.log(variable);
    // location.href= "//codewithharry.com";
});

heading.addEventListener("mouseover" , function(){
    console.log('Mouse in now on the heading')
})