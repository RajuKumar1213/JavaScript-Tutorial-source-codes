

//constuctor
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {// these are the method of Display class
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
        console.log('Adding to UI');
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, message) {
        let alertMsg = document.getElementById('alertMsg');
        let boldText;
        if (type === 'success') {
            boldText = 'seccess';
        }
        else {
            boldText = 'Error!';
        }
        alertMsg.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldText}:</strong>  ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
        `;
        setTimeout(() => {
            alertMsg.innerHTML = "";
        }, 5000);
    }
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
        display.show('success', 'Your book has been added succesfully');
    }
    else {
        display.show('danger', 'Sorry You cannot add this book, You have to enter minimam two charecter to add book');
    }
    e.preventDefault();
    // console.log(book);

    //Saving book object in the localStorage
    let bookObj = localStorage.getItem('bookObj');
    if (bookObj == null) {
        localStorage.setItem('bookObj', JSON.stringify(book));
    }
}
// let book = new Book(name,author, type);
// localStorage.getItem('bookObj');
// if (bookObj == null){

// }
