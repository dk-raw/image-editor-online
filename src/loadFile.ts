const loadFile = (event: any) => {
    //load the image
    const image: any = <HTMLImageElement>document.querySelector('#output')!;
    //display the image
    image.src = URL.createObjectURL(event.target.files[0]);
    (<HTMLButtonElement> document.querySelector('#export-image-btn'))!.disabled = false;
    Edit();
};