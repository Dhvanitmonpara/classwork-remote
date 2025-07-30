const response = fetch("https://saurav.tech/NewsAPI/sources.json");
const newsCon = document.getElementById("news-con");
response
  .then((request) => {
    return request.json();
  })
  .then((rawData) => {
    let data = rawData.sources;
    ihtml = "";
    for (item in data) {
      ihtml += `        
        <div class="news-card">
        <p class="channel-name">${data[item].name}</p>
        <p class="description">${data[item].description}</p>
        <p class="category">Category: ${data[item].category}</p>
        <p class="country">From ${data[item].country.toUpperCase()}</p>
        <a href="${data[item].url}" class="channel-url">Visit site</a>
        </div>`;
    }
    newsCon.innerHTML = ihtml;
  })
  .catch((err) => {
    console.log(`An error ocured`);
    console.log(err.name);
    console.log(err.messege);
  });
