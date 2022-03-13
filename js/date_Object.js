console.log('This is the tutorial 24');

let today = new Date();
// console.log(today)

let otherDate = new Date
// otherDate = new Date('12-4-2003 04:34:06 ');
// otherDate = new Date('June 23 1947');
// otherDate = new Date('09/12/2020');
console.log(otherDate);

let a ;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getFullYear();
a = otherDate.getHours();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
console.log(a);

otherDate.setDate(23);//Date will seted as 23
otherDate.setMonth(3); // This will seted as April bacause counting start form 0 
otherDate.setFullYear(1200);
otherDate.setHours(1);
otherDate.setMinutes(2);
otherDate.setSeconds(3);
console.log(otherDate);


// population the date in hte html page
setInterval(() => {
    let time = document.getElementById('time'); 
    let date = new Date;
    time.innerHTML = date;
}, 1000);
