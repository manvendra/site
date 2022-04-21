export const extractOverviewFromContent = (content) => {

    let template = document.createElement('template');
    template.innerHTML = content;
    return template.content.textContent.substring(0, 125) + ' ...';
}