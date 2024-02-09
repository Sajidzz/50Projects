
  

function addLink() {
    const container = document.getElementById('linksContainer');

    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');

    const urlInput = document.createElement('input');
    urlInput.setAttribute('type', 'text');
    urlInput.setAttribute('placeholder', 'URL');

    linkDiv.appendChild(titleInput);
    linkDiv.appendChild(urlInput);

    container.appendChild(linkDiv);
}

document.querySelector('#Repository').onclick = function() {
    var redirectWindow = window.open('http://google.com', '_blank');
    redirectWindow.location;
};