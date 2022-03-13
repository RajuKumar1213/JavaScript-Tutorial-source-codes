const express = require("express");const { fstat } = require("fs");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); //serving the static files
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine', 'pug') // set the template as pug
app.set('views',path.join(__dirname,'views')); //Set the view directory

///ENDSPOITS
app.get('/',(req ,res) =>{
    const con = "This the best template so far use it wisely"
    const param = {'title': 'Best form fill website' ,"content":con};
    res.status(200).render("index.pug",param );
})

app.post("/",(req ,res)=>{
    name = req.body.name
    age = req.body.age
    email = req.body.email
    phone = req.body.phone
    address = req.body.address
    more = req.body.more

    let outputToWrite= `The name of the clint is ${name} , ${age} years old , Email is ${email} , phone number is ${phone} ,address is the ${address},and more about him is = ${more}`;

    fs.writeFileSync('output.txt',outputToWrite);
    console.log(req.body);
    const param = {'message': 'Your form has submited successfully!'};
    res.status(200).render("index.pug",param );

})

//FOR STATRT THE SERVER
app.listen(port, ()=>{
    console.log(`The server is started successfully on port ${port}`);
})