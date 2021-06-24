const loadFile = (event: any) => {
    //load the image
	const image: any = <HTMLImageElement> document.getElementById('output') !;
    //display the image
	image.src = URL.createObjectURL(event.target.files[0]);
};

const Edit = () => {
    const img: any = <HTMLImageElement> document.getElementById('output') !;
    const sepia : number = parseFloat((< HTMLInputElement > document.getElementById('sepia')).value)!;
    const bright : number = parseFloat((< HTMLInputElement > document.getElementById('brightness')).value)!;
    const contrast : number = parseFloat((< HTMLInputElement > document.getElementById('contrast')).value)!;
    const grayscale : number = parseFloat((< HTMLInputElement > document.getElementById('grayscale')).value)!;
    const saturation : number = parseFloat((< HTMLInputElement > document.getElementById('saturation')).value)!;
    const hue : number = parseFloat((< HTMLInputElement > document.getElementById('hue')).value)!;
    img.style.filter = `sepia(${sepia}%) brightness(${bright}%) contrast(${contrast}%) grayscale(${grayscale}%) saturate(${saturation}%) hue-rotate(${hue}deg)`
}