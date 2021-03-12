import axios from "axios";

const Card = (article) => {
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
  const cardDiv = document.createElement('div');
  const headlineDiv  = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const imageSrc = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.className = 'card';
  headlineDiv.className = 'headline';
  author.className = 'author';
  imgContainer.className = 'img-container';

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imageSrc);
  author.appendChild(authorSpan);

      headlineDiv.textContent=article.headline;
      authorSpan.textContent = article.authorName;
      imageSrc.setAttribute('src', article.authorPhoto);

  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardsContainer = document.querySelector(selector)

  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {

    const bootstrap = res.data.articles.bootstrap;
    const javascript = res.data.articles.javascript;
    const jquery = res.data.articles.jquery;
    const node = res.data.articles.node;
    const technology = res.data.articles.technology;

    console.log(res.data.articles)
    
    cardsContainer.append(Card(bootstrap[0]))
    cardsContainer.append(Card(bootstrap[1]))
    cardsContainer.append(Card(bootstrap[2]))

    cardsContainer.append(Card(javascript[0]))
    cardsContainer.append(Card(javascript[1]))
    cardsContainer.append(Card(javascript[2]))
    cardsContainer.append(Card(javascript[3]))

    cardsContainer.append(Card(jquery[0]))
    cardsContainer.append(Card(jquery[1]))
    cardsContainer.append(Card(jquery[2]))

    cardsContainer.append(Card(node[0]))
    cardsContainer.append(Card(node[1]))

    cardsContainer.append(Card(technology[0]))
    cardsContainer.append(Card(technology[1]))
    cardsContainer.append(Card(technology[2]))
    
  })
  .catch((err) => {
    console.log(err)
  })
}

export { Card, cardAppender }
