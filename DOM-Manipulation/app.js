const button = document.querySelector('.fullscreen')

const clicked = (e) => {
    const nav = document.querySelector('nav');
    nav.className = 'red'
}

const unClicked = (e) => {
    const nav = document.querySelector('nav');
    nav.className = 'blue'
    console.log(e.shiftKey);
    console.log(e.altKey);
    console.log(e.ctrlKey);
}

button.addEventListener('mousedown', clicked);    
button.addEventListener('mouseup', unClicked);
// dblclick
// click
// mouseenter
// mouseleave
// mouseover
// mouseleave
// cut
// copy
// paste
// focus
// blur
// change (select)
// submit


const input = document.querySelector('input')
input.addEventListener('keyup', e => {
    console.log(e.target.value);
})

input.addEventListener('paste', (e) => {
    e.preventDefault();
    console.log('can\'t paste');
})