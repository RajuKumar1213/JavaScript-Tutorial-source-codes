console.log('This is the file of generator');

// Generator
// 1 - 1B
function* numberGen(){
    let i = 0;

    while(true){
        yield i++; 
        // yield (i++).toString();// Use this to covet a number into string

    }
    // yield  1;
    // yield  2;
    // yield  3;
    // yield  4;
    // yield  5;

}
const gen = numberGen()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
