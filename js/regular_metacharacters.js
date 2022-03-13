console.log('This is the regular metacharacters in javaScript');

let regx = /raju/;
// lets look into some metacharaters symbol
regx = /^raj/; // ^ charet means expression will match if string start with
regx = /ju$/; // $ at the end of the string means "Sting ends with"
regx = /ra.u/ // matches any only one character
regx = /ra*ju/ // matches any 0 and more character
regx = /ra?jui?/ // after which character ? lies, that is optional, We can ignore it
regx = /r\*ju/ // By this we can match * character as it is

// let str = "raju is a good boy raju";
str = "r*ju";

let result = regx.exec(str);
console.log("The result form exec is ", result);

if(regx.test(str)){
    console.log(`The string ${str} matches the expression ${regx.source}`);
}
else{
    console.log(`The string ${str} does not matches from the expression ${regx.source}`);
}