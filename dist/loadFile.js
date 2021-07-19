"use strict";
const loadFile = (event) => {
    const image = document.querySelector('#output');
    image.src = URL.createObjectURL(event.target.files[0]);
    document.querySelector('#export-image-btn').disabled = false;
    document.querySelector('#image-from-url-form').reset();
    Edit();
};
