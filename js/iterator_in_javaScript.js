console.log('Hello In this tutorial I am going to learn about the iterator in js');

//ITERATORS

function fruitIterator(values){
    let nextIndex = 0;
    //We will return object
    return{
        next:function(){
            if (nextIndex < values.length){
                return{
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}
const myArray = ['Apples', 'Grapes', 'Oranges', 'Guavas', 'Mangoes', 'PineApples'];
console.log("The array is ", myArray);

//Using the  Iterotor
const fruits = fruitIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
