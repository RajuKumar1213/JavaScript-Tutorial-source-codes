console.log("This is the tutorial 31.js");

class employee { // Classes are a template for creating objects
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `Hi I am ${this.name} and my company google is the best`;
    }
    joiningYear() {
        return 2021 - this.experience;
    }
    static add(a, b) {//we can use this without the making class (we haven't use this.whatever in the above)
        return a + b;
    }
}
let raju = new employee("Raju", 23, "first");
console.log(raju.joiningYear());
console.log(raju);
console.log(employee.add(23, 5));

//Template Inheritance =>Making a new template by the help of old template;

class Programmer extends employee {//first takeout form employee class then make programmer class
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub) {
        super(givenName, givenExperience, givenDivision);//constructor of last class
        this.language = givenLanguage;
        this.github = givenGithub;
    }
    
    favorateLanguage(){
        if(this.language =='python'){
            return 'python';
        }
        else{
            return 'javaScript';
        }
    }

    static multiply(a , b){
        return a*b;
    }
} 
let Kush = new Programmer("Kush", 3,"second", "C++", "Kush8876.github");
console.log(Kush);
console.log(Kush.favorateLanguage());
console.log(programmer.multiply(3,4));

