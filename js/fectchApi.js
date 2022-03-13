console.log("This is hte turorial of the Fetch api");

// button with id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById('content');


// HERE URL IS THE RAJU.TXT
function getData(){
    console.log('Started getData')
    URL = 'raju.txt';
    fetch(URL).then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

// HERE URL IS THE GITHUB USERS URL AND THIS IS A GET REQUEST
function getData(){
    console.log('Started getData')
    URL = 'https://api.github.com/users';
    fetch(URL).then((response)=>{
        console.log("Inside first then")
        return response.json();// We don't have to write JSON.stringyfy for converting josn in object.Here json work instead of it.
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
        let content = document.getElementById('content');
        data.forEach(element => {
            content.innerHTML += element.starred_url;
        });
    })
}
getData();


//THIS IS THE POST REQEST
function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"raju2789993","salary":"123","age":"23"}';
    params = {
        method :'post',
        credentials: 'same-origin',
        headers : {
            'content-Type':'application/x-www-form-urlencoded'
        },
        body :data
    }
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data=>{
        console.log(data);
    }))
} 
postData();

