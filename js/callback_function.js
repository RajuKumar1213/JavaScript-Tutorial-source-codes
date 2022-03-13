console.log("This is the tutorial 37 ");
// IN THIS VEDEO WE WILL LEARN ABOUT THE CALLBACK FUNCTION

const students = [
    {name: 'Raju', subject:'JavaScript'},
    {name: 'Rajan', subject:'Machine Learining'}

]

function enroleStudent(student , callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been inrolled");
        callback();
    },3000);
    
}

function getStudents(){
    setTimeout(function(){
        let str =  "";
        students.forEach(function(student){
            str += `<li>${student.name} </li>`;
        })
        let std = document.getElementById("student");
        std.innerHTML = str;
        console.log('Student have been feched')
    }, 1000);
}

let newStudent = {name:'kush', subject:'python'};
enroleStudent(newStudent , getStudents);
// getStudents();

//CALLBACK FUNCTION => THE FUNCTION INSIDE FUNCTION IS CALLED THE CALLBACK FUNCTION