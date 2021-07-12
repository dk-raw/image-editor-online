"use strict";
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
