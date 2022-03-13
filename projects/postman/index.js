console.log("In this file we are going to make the clone of post man");
//Initailizing the parameterIndex
let parameterIndex = 0;

// Utility function
//1. make a function to show the sting in the dom
// 2. If user click on the - button then show a confomation on the top;
function conformationOnMinus(deleteItem) {
    window.confirm(deleteItem)
}

function printStingInDom(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}

//We have to hide the parametersBox initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = 'none';

//If we click on Json we have to hide the custom parameter
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = 'block';
    document.getElementById("parametersBox").style.display = 'none';
})


// if we click on the custom parameter then we have to hide the josn box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
    document.getElementById("requestJsonBox").style.display = 'none';
    document.getElementById("parametersBox").style.display = 'block';
})

// if users click on the + button then it have to ruplicateed
let addParam = document.getElementById("addParam");
addParam.addEventListener('click', () => {
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${parameterIndex + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter ${parameterIndex + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter ${parameterIndex + 2} Value">
                    </div>
                    <button  class="btn btn-primary deleteParam">-</button>
                </div>`;
    let params = document.getElementById("params");
    let wouldBeString = printStingInDom(string);
    // console.log(wouldBeString)
    params.appendChild(wouldBeString)

    // Deleting the element deleteParam parent element by clicking -
    let deleteParam = document.getElementsByClassName("deleteParam");
    for (item of deleteParam) {
        // console.log(item)
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            // conformationOnMinus(deleteItem);
        })
    }
    parameterIndex++;
})

// If the user clicks on the submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    document.getElementById("responsePrism").innerHTML = "Please wait... Fectching response...";

    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // log the all values in the console
    console.log('URL is', url);
    console.log('requstType is', requestType);
    console.log('contentType is', contentType);

    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < (parameterIndex + 1); i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value; 
            }
        }
        data = JSON.stringify(data);
        console.log(data)
    }
    else {
        data = document.getElementById("requestJsonText").value;
    }
    console.log(data);

    // if the request type is post then , invoke getch api to create a get request;
    // this is the long code of fetch api
    // if (requestType == 'GET') {
    //     fetch(url, {
    //         method: 'GET',
    //     }).then((response) => {
    //         return response.text();
    //     }).then((data) => {
    //         console.log(data);
    //          document.getElementById("responseJsonText").value = data;
    //     })
    // }

    // This is the shorCut code of fecth api for the get Request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET'
        }).then(response => response.text())
            .then((text) => {
                // document.getElementById("responsePrism").value = text;
                document.getElementById("responsePrism").innerHTML = text;
                Prism.highlightAll();
            })
    }
    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => response.text())
            .then((text) => {
                document.getElementById("responsePrism").value = text;
                Prism.highlightAll();
            })
    }


})


