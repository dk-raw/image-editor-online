"use strict";
const loadImageFromUrl = () => {
    let url = document.querySelector('#image-url').value;
    if (url !== "" && (url[0] === 'h' && url[1] === 't' && url[2] === 't' && url[3] === 'p' && url[4] === ':' && url[5] === '/' && url[6] === '/') || (url[0] === 'h' && url[1] === 't' && url[2] === 't' && url[3] === 'p' && url[4] === 's' && url[5] === ':' && url[6] === '/' && url[7] === '/') && (url.toLowerCase().includes(".jpg") || url.toLowerCase().includes(".png") || url.toLowerCase().includes(".gif"))) {
        document.querySelector('#output').src = document.querySelector('#image-url').value;
        if (document.querySelector('#output').src !== window.location.href) {
            document.querySelector('#export-image-btn').disabled = false;
            console.log(document.querySelector('#output').src);
        }
        Edit();
    }
    else {
        alert('Unsuppoerted file type or protocol');
    }
};
