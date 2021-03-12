import axios from "axios";

const Tabs = (topics) => {

  const topicsDiv = document.createElement("div");

  topicsDiv.className = 'topics';

  topics.forEach(element => {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.textContent = element;
    topicsDiv.appendChild(tab);
  });

  return topicsDiv
}

const tabsAppender = (selector) => {
  
  const tabsContainer = document.querySelector(selector)

  axios
  .get('https://lambda-times-api.herokuapp.com/topics ')
  .then((res) =>{
    tabsContainer.appendChild(Tabs(res.data.topics))
  })
  .catch((err) => {
    debugger;
  })
}

export { Tabs, tabsAppender }
