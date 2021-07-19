"use strict";
const Download = () => {
    const img = document.getElementById('output');
    const sepia = parseFloat(document.querySelector('#sepia').value);
    const bright = parseFloat(document.querySelector('#brightness').value);
    const contrast = parseFloat(document.querySelector('#contrast').value);
    const grayscale = parseFloat(document.querySelector('#grayscale').value);
    const saturation = parseFloat(document.querySelector('#saturation').value);
    const hue = parseFloat(document.querySelector('#hue').value);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
    try {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    catch (error) {
        alert(error);
    }
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'output.png';
    link.href = dataURL;
    link.click();
};
