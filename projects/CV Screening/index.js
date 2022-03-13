console.log('This is the cv screening website');
//Date is an array objects which contains the infomation about the candidate
const data = [
    {
        name: 'Raju vishwakarma',
        age: 18,
        city: 'Ranchi',
        language: 'javaScript',
        framework: 'React js',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Aradhna pandey',
        age: 19,
        city: 'Ranchi',
        language: 'javaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/49.jpg'
    },

    {
        name: 'Aiswariya Rai',
        age: 42,
        city: 'Mumbai',
        language: 'Python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },

    {
        name: 'Rajan vishwakarma',
        age: 17,
        city: 'Daltonganj',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        name: 'Rahul vishwakarma',
        age: 13,
        city: 'Ranchi',
        language: 'javaScript',
        framework: 'React js',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },

    {
        name: 'Kush vishwakarma',
        age: 19,
        city: 'Daltonjanj',
        language: 'Go',
        framework: 'Angular js',
        image: 'https://randomuser.me/api/portraits/men/58.jpg'
    },

    {
        name: 'Lov vishwakarma',
        age: 18,
        city: 'banglore',
        language: 'auto cad',
        framework: 'Auto frameWork',
        image: 'https://randomuser.me/api/portraits/men/40.jpg'
    },

    {
        name: 'Akash vishwakarma',
        age: 20,
        city: 'Kaswakhad',
        language: 'C++',
        framework: 'C++ framework ',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Khushbu Kumari',
        age: 24,
        city: 'Japle',
        language: 'C',
        framework: 'C framework ',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
    },

    {
        name: 'Laksh Kumar Sharma',
        age: 3,
        city: 'Japle',
        language: 'C',
        framework: 'C framework ',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },

    {
        name: 'Aditya Kumar Sharma',
        age: 0.2,
        city: 'Japle',
        language: 'C',
        framework: 'C framework ',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },

]

// Cv Iterator with the ternary operator

// function cvIterator(profiles) {
//     nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < profiles.length ?
//             {value:profiles[nextIndex++]}:
//             {done:true}
//         }
//     }
// }

// Cv Iterator with the if else statement
function cvIterator(profiles) {
    nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

// Iterator
function cvIterator(profiles){
    nextIndex = 0;
    return{
        next: function(){
            if(nextIndex < profiles.length){
                return {
                    value: profiles[nextIndex++],
                    done:false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}

const candidate = cvIterator(data);


const next = document.getElementById("next");
next.addEventListener('click', nextCv);

function nextCv(){
    let nextCandidate = candidate.next().value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(nextCandidate != undefined){
    image.innerHTML = `<img src="${nextCandidate.image}">`;
    profile.innerHTML = `<ul class="list-group">
  
    <li class="list-group-item list-group-item-secondary">Name: ${nextCandidate.name}</li>
    <li class="list-group-item list-group-item-success">${nextCandidate.age} Years old</li>
    <li class="list-group-item list-group-item-danger">Lives in ${nextCandidate.city}</li>
    <li class="list-group-item list-group-item-warning">Primarily workign on ${nextCandidate.language}</li>
    <li class="list-group-item list-group-item-info">${nextCandidate.framework} </li>
  </ul>`;
    }
    else{
        alert("Candidate has been finished !");
        window.location.reload();
    }
}
nextCv();