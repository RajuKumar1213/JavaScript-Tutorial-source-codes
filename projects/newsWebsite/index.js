console.log("This is the news website");
// b6d4a8f203ee4ea5a3da84e40b977f43

//Initializing the news api parameters
let country = 'in';
let apiKey = 'b6d4a8f203ee4ea5a3da84e40b977f43';

// Create an ajax get request
let xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// What to do when all thinks is ready
xhr.onload = (function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = (json.articles);
    // console.log(articles)

    let newsHtml = "";
    articles.forEach((element, index) => {
      let news = `<div class="accordion-item">
            <h2 class="accordion-header collapsed" id="heading${index}">
              <button class="accordion-button " type="button" class="newsCard" data-bs-toggle="collapse" data-bs-target="#collapse${index} " aria-expanded="true" aria-controls="collapse${index}">
               <b>Breaking News ${index + 1}:-</b>  ${element.title}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ${element.content}. <a href="${element.url}" target="_blank">Read more here</a>
              </div>
            </div>
            </div>`;

      newsHtml += news;
    });
    let newsAccordion = document.getElementById("newsAccordion");
    newsAccordion.innerHTML = newsHtml;


  }
  else {
    console.log("some error occured");

  }
})




xhr.send();
