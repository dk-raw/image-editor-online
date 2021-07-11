const loadFile = (event: any) => {
    //load the image
    const image: any = <HTMLImageElement>document.getElementById('output')!;
    //display the image
    image.src = URL.createObjectURL(event.target.files[0]);
};
const Edit = () => {
    const img: any = <HTMLImageElement>document.getElementById('output')!;
    const sepia: number = parseFloat((<HTMLInputElement>document.getElementById('sepia')).value)!;
    const bright: number = parseFloat((<HTMLInputElement>document.getElementById('brightness')).value)!;
    const contrast: number = parseFloat((<HTMLInputElement>document.getElementById('contrast')).value)!;
    const grayscale: number = parseFloat((<HTMLInputElement>document.getElementById('grayscale')).value)!;
    const saturation: number = parseFloat((<HTMLInputElement>document.getElementById('saturation')).value)!;
    const hue: number = parseFloat((<HTMLInputElement>document.getElementById('hue')).value)!;
    img.style.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`
}

(<HTMLButtonElement>document.querySelector('#reset-btn')).addEventListener('click', () => {
    (<HTMLFormElement>document.querySelector('#adjustments')).reset();
    Edit();
});

const Download = () => {
    const img: any = <HTMLImageElement>document.getElementById('output')!;
    const canvas: any = document.createElement('canvas');
    const ctx: any = canvas.getContext('2d');
    //crops and zooms the image a lot
    ctx.drawImage(img, 0, 0);
    //must apply the filters here
    ctx.filter = "brightness(200)";
    const dataURL: any = canvas.toDataURL('image/png');
    const link: any = document.createElement('a');
    link.download = 'output.png';
    link.href = dataURL;
    link.click();
}