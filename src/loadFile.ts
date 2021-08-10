const loadFile = (event: any) => {
    const image: any = <HTMLImageElement>document.querySelector('#output')!;
    try {
        image.src = URL.createObjectURL(event.target.files[0]);
    } catch (error) {
        alert('Error: ' + error);
    }
    localStorage.setItem('temp-file-name', event.target.files[0].name);
    image.classList.remove('d-none');
    (<HTMLButtonElement>document.querySelector('#export-image-btn'))!.disabled = false;
    Edit();
};