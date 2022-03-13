// console.log("This is the tutorial 37 ");
// // IN THIS VEDEO WE WILL LEARN ABOUT THE CALLBACK FUNCTION

// const students = [
//     {name: 'Raju', subject:'JavaScript'},
//     {name: 'Rajan', subject:'Machine Learining'}

// ]

// function enroleStudent(student , callback){

//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             students.push(student);
//             console.log("Student has been inrolled");
//             let error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },3000);
//     })

// }

// function getStudents(){
//     setTimeout(function(){
//         let str =  "";
//         students.forEach(function(student){
//             str += `<li>${student.name} </li>`;
//         })
//         let std = document.getElementById("student");
//         std.innerHTML = str;
//         console.log('Student have been feched')
//     }, 1000);
// }

// let newStudent = {name:'kush', subject:'python'};
// enroleStudent(newStudent).then(getStudents).catch(function(){
//     console.log("Some error occured");
// })
// // getStudents();

// // function inside then is run as = resolve();
// // function inside catch is run as = reject();


// //CALLBACK FUNCTION => THE FUNCTION INSIDE FUNCTION IS CALLED THE CALLBACK FUNCTIO

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = false;
            if (!error) {
                console.log("This function has been resolved");
                resolve();
            }
            else {
                console.log("This function has not been resolved");
                reject();

            }
        }, 2000);

    })
}
func1().then(function () {
    console.log("Raju:Thank for resolving");
}).catch(function () {
    console.log("Some error occured");
})
