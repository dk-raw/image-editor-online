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
document.querySelector('#reset-btn').addEventListener('click', () => {
    document.querySelector('#adjustments').reset();
    Edit();
});
const Download = () => {
    const img = document.getElementById('output');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.filter = "brightness(200)";
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'output.png';
    link.href = dataURL;
    link.click();
};
