"use strict";
const loadFile = (event) => {
    const image = document.querySelector('#output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.classList.remove('d-none');
    document.querySelector('#export-image-btn').disabled = false;
    Edit();
};
