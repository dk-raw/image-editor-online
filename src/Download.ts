const Download = () => {
    const img: any = <HTMLImageElement>document.getElementById('output')!;
    const fileName: string = localStorage.getItem('temp-file-name') || 'image-editor.dkatsios.ml';
    const sepia: number = parseFloat((<HTMLInputElement>document.querySelector('#sepia')).value)!;
    const bright: number = parseFloat((<HTMLInputElement>document.querySelector('#brightness')).value)!;
    const contrast: number = parseFloat((<HTMLInputElement>document.querySelector('#contrast')).value)!;
    const grayscale: number = parseFloat((<HTMLInputElement>document.querySelector('#grayscale')).value)!;
    const saturation: number = parseFloat((<HTMLInputElement>document.querySelector('#saturation')).value)!;
    const hue: number = parseFloat((<HTMLInputElement>document.querySelector('#hue')).value)!;
    const invert: number = parseFloat((<HTMLInputElement>document.querySelector('#invert')).value)!;
    const blur: number = parseFloat((<HTMLInputElement>document.querySelector('#blur')).value)!;
    const opacity: number = parseFloat((<HTMLInputElement>document.querySelector('#opacity')).value)!;
    const canvas: any = document.createElement('canvas');
    const ctx: any = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg) invert(${invert}%) blur(${blur}px) opacity(${opacity}%)`;
    try {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } catch (error) {
        alert('Error: ' + error);
    }
    try {
        const dataURL: any = canvas.toDataURL('image/png');
        const link: any = document.createElement('a');
        link.download = `${fileName}-edited.png}`;
        link.href = dataURL;
        link.click();
    } catch (error) {
        alert('Error: ' + error);
    }
}