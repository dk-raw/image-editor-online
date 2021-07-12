(<HTMLButtonElement>document.querySelector('#reset-btn')).addEventListener('click', () => {
    (<HTMLFormElement>document.querySelector('#adjustments')).reset();
    Edit();
});