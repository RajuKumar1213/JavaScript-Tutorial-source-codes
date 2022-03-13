console.log("This is the project numner 4 in this project we are going to make a form validation website by the help of regular experssion");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
validUser = false;
validEmail = false;
validPhone = false;

// console.log(name, email,phone);
name.addEventListener('blur', () => {
    console.log("name in blured");
    //Validate name hre
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s+]{2,30}$)/;//"^" means star with and "$" must end with
    let str = name.value;
    if (regex.test(str)) {
        console.log("Your name is valid ");
        name.classList.remove("is-invalid");
        validUser = true;
    }
    else {
        console.log("Your name is not valid");
        name.classList.add('is-invalid');
        validUser = false;
    }
    console.log(regex.source, str);
})

email.addEventListener('blur', () => {
    console.log("email in blured");
    //Validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;//"^" means star with and "$" must end with
    let str = email.value;
    if (regex.test(str)) {
        console.log("Your email is valid ");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        console.log("Your email is not valid");
        email.classList.add('is-invalid')
        console.log(regex.source, str);
        validEmail  = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone in blured");
    //Validate phone here

    let regex = /^([0-9]{10}$)/;//"^" means star with and "$" must end with
    let str = phone.value;
    if (regex.test(str)) {
        console.log("Your phone is valid ");
        phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else {
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
    console.log(regex.source, email)
})

// To the alert message


let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    //Submit the form here
    if(validEmail && validPhone && validUser){
       
    let alertMessage = document.getElementById("alertMessage");
    let successHtml = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success! </strong>Your travel request has been submitted successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    alertMessage.innerHTML = successHtml;
    failure.innerHTML = "";


        // success.classList.add("show");
        // failure.classList.remove('show');
        // let failure = document.getElementById("failure");
        // // $('#failure').hide();
        // // $('#success').show();
        // $('#success').alert('close');
    }
    else{
        let failure = document.getElementById("failure");

        let failureHtml =  `<div id="success" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Success! </strong>Your travel request has not been submitted due to some error 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        failure.innerHTML = failureHtml;
        alertMessage.innerHTML ="";
        // failure.classList.add('show');
        // // success.classList.remove('show');
        // $('#success').hide();
        // $('#failure').show();
        
    }
    console.log("you clicked on submit");


    //  POPULATING THE LIST
    // let name = document.getElementById("name");
    // let email = document.getElementById('email');
    // let number = document.getElementById("phone");
    let car = document.getElementById('car');
    let city = document.getElementById('city');
    let pincode = document.getElementById('pincode');
    
    // console.log(name,email, phone,car, city, pincode);
    userName = name.value;
    number = phone.value;
    mail = email.value;
    myCar = car.value;
    myCity = city.value;
    myPincode = pincode.value;

    let travelList = localStorage.getItem('travelList');
    // console.log(travelList)
    if(travelList == null){
        travelListObj = [];
        travelListObj.push([userName,number, mail,myCar , myCity, myPincode]);
        localStorage.setItem('travelList', JSON.stringify(travelListObj));
    }
    else{
        travelListObjStr = localStorage.getItem('travelList');
        travelListObj = JSON.parse(travelListObjStr);
        travelListObj.push([userName,number, mail,myCar , myCity, myPincode]);
        localStorage.setItem('travelList', JSON.stringify(travelListObj));
    }

    // POPULATING THE TABLE
    let tableBody = document.getElementById('tableBody');
    let html = "";
    travelListObj.forEach((element, index)=> {
        html += `
            <tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td>${element[3]}</td>
                <td>${element[4]}</td>
                <td>${element[5]}</td>
                <td> <button type="button" class="btn btn-primary btn-sm" >Delete</button></td>
            </tr>
        `;
      
    });
    tableBody.innerHTML = html;
    console.log(travelListObj);

    
})



