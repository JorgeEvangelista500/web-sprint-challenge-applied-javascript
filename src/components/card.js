import axios from 'axios';
const Card = (article) => {
console.log(article)
 
    const cardWrapper = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img')
    const authorName = document.createElement('span');

    cardWrapper.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgWrapper.classList.add('img-container');

    cardWrapper.appendChild(headline);
    cardWrapper.appendChild(author);
    author.appendChild(imgWrapper);
    imgWrapper.appendChild(img);
    author.appendChild(authorName);
   

    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    authorName.textContent = article.authorName;

    cardWrapper.addEventListener('click', () => {
      console.log(headline.textContent)


     })

    return cardWrapper

  }
  

  


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    res.data.articles.javascript.forEach(element => {
       document.querySelector(selector).appendChild(Card(element))})
    res.data.articles.bootstrap.forEach(element => {
        document.querySelector(selector).appendChild(Card(element))})
    res.data.articles.technology.forEach(element => {
        document.querySelector(selector).appendChild(Card(element))})
    res.data.articles.jquery.forEach(element => {
        document.querySelector(selector).appendChild(Card(element))})
    res.data.articles.node.forEach(element => {
        document.querySelector(selector).appendChild(Card(element))})
    });
  
    

    }

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
