console.log("This is the ajax tutorial in one video");

let fetchBtn = document.getElementById("fectchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("You have clicked on the fectchBtn");
    // Intantiate an xhr Object
    const xhr = new XMLHttpRequest();
    // open the object

    // THIS IS THE GET REQUIEST
    xhr.open('GET', 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',true);//here true is the asynchronous programming it will not block the program
    
    //USE THIS FOR POST REQUEST
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create',true);
    // xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded");//This is the response header


    // what to do on progress(this is optional)
    xhr.onprogress = function(){
        console.log("On Progress");   
    }

    // This is the old  method using insted the onload
    // xhr.onreadystatechange = function(){
    //     console.log("ready to state ", xhr.readyState);
    // }


    //What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }

    // send the request
    // params = `{"name":"test234","salary":"123","age":"23"}`;
    xhr.send();
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log("You have clicked on the popBtn");
    // Intantiate an xhr Object
    const xhr = new XMLHttpRequest();
    // open the object

    // THIS IS THE GET REQUIEST
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos',true);//here true is the asynchronous programming it will not block the program
    

    // what to do on progress(this is optional)
    xhr.onprogress = function(){
        console.log("On Progress");   
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
        let list = document.getElementById('list');
        let obj =JSON.parse(this.responseText);
        console.log(obj)
        let str ="";
        for(key in obj){
            str += `<li> ${obj[key].id}</li>`;
        }
        list.innerHTML = str;
        }
        else{
            console.error("Some error occured");
        }
    }

    xhr.send();
 }

// GET => In get request we can send only URL 
// POST => In post request we have send url and data both