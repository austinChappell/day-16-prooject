let businessCard = document.querySelector('.business-card');
let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/austinchappell');
req.addEventListener('load', addContent);
req.send();

function addContent() {
  let data = JSON.parse(req.responseText);
  console.log(data);

  let content = `<div class="header">
          <h1 class="name">${ data.name }</h1>
        </div>
        <div class="body">
          <section class="basics">
            <h2>The Basics</h2>
            <ul class="basics-ul">
              <li><span>Name:</span> ${ data.name }</li>
              <li><span>Github URL:</span> ${ data.login }</li>
              <li><span>Email:</span> ${ data.email }</li>
              <li><span>Company:</span> ${ data.company }</li>
              <li><span>Website:</span> ${ data.blog }</li>
            </ul>
          </section>
          <section class="story">
            <h2>The Story</h2>
            <p>${ data.bio }</p>
          </section>
          <section class="story-image">
              <img class="headshot" src="${ data.avatar_url }">
          </section>
        </div>`

  businessCard.innerHTML = content;

};
