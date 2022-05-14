import  * as Constants from './Constants'

export const extractOverviewFromContent = (content) => {
    let template = document.createElement('template');
    template.innerHTML = content;
    return template.content.textContent.substring(0, 125) + ' ...';
}

export const appendContent = (parent,content) =>{
    var contentDiv = document.createElement("div");
    contentDiv.innerHTML = content;
    parent.appendChild(contentDiv);
}

export  const sortPostByRank = (posts) =>
posts.sort((post1, post2) => getPostRank(post1.labels) >= getPostRank(post2.labels) ? 1 : -1);

export const getPostRank = (labels) => {
let rankLabel = labels?.find(label => label.startsWith(Constants.POST_LABEL_RANK));

return (rankLabel)
  ? parseInt(rankLabel.substring(rankLabel.indexOf(Constants.POST_LABEL_RANK) + Constants.POST_LABEL_RANK.length))
  : 1000; //A random high number to have unranked post at the end
}

export const openInNewTab = (url) => {
  alert(`openInNewTab called with ${url}`);
  const newWindow = window.open(url, '_blank', 'noopener');
  if (newWindow) newWindow.opener = null;
}