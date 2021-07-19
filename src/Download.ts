const Download = () => {
    const img: any = <HTMLImageElement>document.getElementById('output')!;
    const sepia: number = parseFloat((<HTMLInputElement>document.querySelector('#sepia')).value)!;
    const bright: number = parseFloat((<HTMLInputElement>document.querySelector('#brightness')).value)!;
    const contrast: number = parseFloat((<HTMLInputElement>document.querySelector('#contrast')).value)!;
    const grayscale: number = parseFloat((<HTMLInputElement>document.querySelector('#grayscale')).value)!;
    const saturation: number = parseFloat((<HTMLInputElement>document.querySelector('#saturation')).value)!;
    const hue: number = parseFloat((<HTMLInputElement>document.querySelector('#hue')).value)!;
    const canvas: any = document.createElement('canvas');
    const ctx: any = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
    try {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } catch (error) {
        alert(error);
    }
    const dataURL: any = canvas.toDataURL('image/png');
    const link: any = document.createElement('a');
    link.download = 'output.png';
    link.href = dataURL;
    link.click();
}