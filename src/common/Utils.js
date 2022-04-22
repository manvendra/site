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