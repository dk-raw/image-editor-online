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