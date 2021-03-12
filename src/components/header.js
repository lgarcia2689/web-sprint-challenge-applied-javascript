const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleh1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  headerDiv.className = 'header';
  dateSpan.className = 'date';
  tempSpan.className = 'temp'

  dateSpan.textContent = date;
  titleh1.textContent = title;
  tempSpan.textContent = temp;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleh1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerAppender = (selector) => {
  const headerContainer = document.querySelector(selector)
  
  headerContainer.append(Header('Luis Garcia','03/12/2021','80°'))
}

export { Header, headerAppender }
