let reg = /Raju kumar vishwakarma/;
console.log(reg);
console.log(reg.source);

let str = "This is the best coder in the world that is Raju kumar vishwakarma";
let result = reg.exec(str);
console.log(result)

let result2 = reg.test(str);
console.log(result2);

// let result3 = reg.match(str);// this is wrong syntax
let result3 = str.match(reg);// this is right syntax
console.log(result3)

let result4 = str.search(reg);// if match found it will return index
console.log(result4)

let result5 = str.replace(reg, "Raju Bhai");
console.log(result5);