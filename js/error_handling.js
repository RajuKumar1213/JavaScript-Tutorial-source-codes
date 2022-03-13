console.log('This is the Error handling tutorial ');

let a = "Raju Bhai";
a = undefined;
if(a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
    
}
try {
    console.log('Now we are inside try block');
    functionRaju();
    
} catch (error) {
    // console.log('Are you okey?');
    // console.log(error)
    console.log(error.name);
    console.log(error.message);
    
}
finally{
    console.log('We will run this what ever happen with the program');
    
}

//TYPES OF ERROR IN JAVASCRIPT
// EvalError

// RangeError
// ReferenceError

// SyntaxError

// TypeError
// URIError

// AggregateError

// InternalError 