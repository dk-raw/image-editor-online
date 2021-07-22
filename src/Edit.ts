const Edit = () => {
    const img: any = <HTMLImageElement>document.querySelector('#output')!;
    const sepia: number = parseFloat((<HTMLInputElement>document.querySelector('#sepia')).value)!;
    const bright: number = parseFloat((<HTMLInputElement>document.querySelector('#brightness')).value)!;
    const contrast: number = parseFloat((<HTMLInputElement>document.querySelector('#contrast')).value)!;
    const grayscale: number = parseFloat((<HTMLInputElement>document.querySelector('#grayscale')).value)!;
    const saturation: number = parseFloat((<HTMLInputElement>document.querySelector('#saturation')).value)!;
    const hue: number = parseFloat((<HTMLInputElement>document.querySelector('#hue')).value)!;
    img.style.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`
}