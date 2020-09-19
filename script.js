const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active')
    }
}
panels.forEach(elem => {
    elem.addEventListener('click', toggleOpen)
});
panels.forEach(elem => {
    elem.addEventListener('transitionend', toggleActive)
});