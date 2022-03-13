console.log('This is the tutorail 27.and in this tutorial we are going to learn and the object oriented programming language');
//Object literal for creating Objects
let car = {
    name: 'Maruti 800',
    topSpeed: 98,
    run: function () {
        console.log("The car is running");
    }
}
console.log(car);

//We have alreay seen constructors like these
// new Date();

//Creating cunstructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyse = function () {
        console.log(`this car is slower by ${300 - this.topSpeed} km/H than Bugati`);
    }
}
car1 = new GeneralCar('Matuti Alto', 180)
car2 = new GeneralCar('Mercedies', 250);
car3 = new GeneralCar('Bugati', 300);

console.log(car1, car2, car3);