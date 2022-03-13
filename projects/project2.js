console.log("This is project number 1");

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Constructor
function Display() {
}

//Add mothod to the display ptototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let uiString = ` 
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
    console.log('Adding to UI');
}
// Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
//Implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
//Impelementing the show function
Display.prototype.show = function (type,message) {
    let alertMsg = document.getElementById('alertMsg');
    alertMsg.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message:</strong>  ${ message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    `;
    setTimeout(() => {
        alertMsg.innerHTML = "";
    }, 5000);
}
//Add submit event listener the libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted the library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let investment = document.getElementById('investment');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;

    }
    else if (investment.checked) {
        type = investment.value;
    }
    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','Your book has been added succesfully');
    }
    else {
        display.show('danger' , 'Sorry You cannot add this book');
    }
    e.preventDefault();
    console.log(book);
}


