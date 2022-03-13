console.log("In this file we will learn about the map in javaScript");

let myMap = new Map();

const key1 = 'My Str', key2 = {name:"raju"}, key3 = function () { };

//Setting the values in the map
myMap.set(key1, 'This is a string ');
myMap.set(key2, "This is a blank object");
myMap.set(key3, "This is a balnk function");

console.log(myMap);

//Getting the values from the map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size)

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);

}

//Get the keys only
for(let keys of myMap.keys()){
    console.log('the key is', keys)
}

//Get only values
for(let values of myMap.values()){
    console.log('The value is: ',values)
}

//You can loop through a map using the forEach loop
myMap.forEach(( value, key)=>{
    console.log("Key is", key);
    console.log("Value is", value);
})

// Convert map to an array
let myArray = Array.from(myMap);
console.log('Array of myMap' , myArray);

let myKeysArray = Array.from(myMap.keys());
console.log('Array keys of myMap' , myKeysArray);

let myValuesArray = Array.from(myMap.values());
console.log('Array values of myMap' , myValuesArray);

