const loadFile = (event: any) => {
    const image: any = <HTMLImageElement>document.querySelector('#output')!;
    image.src = URL.createObjectURL(event.target.files[0]);
    image.classList.remove('d-none');
    (<HTMLButtonElement>document.querySelector('#export-image-btn'))!.disabled = false;
    Edit();
};