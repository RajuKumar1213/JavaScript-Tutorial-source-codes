console.log('This is the drag and drop utility');

const imgBox = document.querySelector(".imgBox");
// console.log(imgBox)
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listener for draggable Element imgBox
imgBox.addEventListener("dragstart", (e) => {
    console.log('DragStart has beeb triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += 'hide';
    }, 0);// means if all action done the do this
})


imgBox.addEventListener("dragend", (e) => {
    console.log('DragEnd has been triggered ');
    e.target.className += 'imgBox'
})

// four event listener for the all whiteBox element
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        console.log('dragOver has been triggered ');
        e.preventDefault();

    })

    whiteBox.addEventListener("dragenter", (e) => {
        console.log('dragEnter has been triggered ');
        e.target.className += ' dashed';

    })

    whiteBox.addEventListener("dragleave", (e) => {
        console.log('dragleave has been triggered ');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener("drop", (e) => {
        console.log('drop has been triggered ');
        e.target.append(imgBox);
    })
}