export const extractOverviewFromContent = (content) => {

    let template = document.createElement('template');
    template.innerHTML = content;
    let overview = template.content.textContent.substring(0, 100) + '...';
    return overview;
}