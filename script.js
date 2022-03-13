function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen-area')
    image.src="https://c.tenor.com/_aP-TAoTMGYAAAAd/cat.gif";
    div.appendChild(image);
}

function reset() {
    document.getElementById('generateCat').remove();
}