"use strict";
const loadFile = (event) => {
    const image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
const Edit = () => {
    const img = document.getElementById('output');
    const sepia = parseFloat(document.getElementById('sepia').value);
    const bright = parseFloat(document.getElementById('brightness').value);
    const contrast = parseFloat(document.getElementById('contrast').value);
    const grayscale = parseFloat(document.getElementById('grayscale').value);
    const saturation = parseFloat(document.getElementById('saturation').value);
    const hue = parseFloat(document.getElementById('hue').value);
    img.style.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
};
