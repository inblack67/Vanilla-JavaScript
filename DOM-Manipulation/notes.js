// DOM SELECTORS

const items = document.querySelectorAll('.collection-item');

for (const item of items) {
    item.style.color = 'blue';
}

// document.querySelector('input[type=text]').placeholder = 'item'

const x = document.querySelector('.collection-item:last-child')
x.style.color = 'red'

const y = document.querySelectorAll('.collection-item:nth-child(odd)')
for (const i of y) {
    i.style.backgroundColor = 'grey'
}

const btn = document.querySelector('button')
btn.classList.remove('darken-2')
btn.classList.add('pulse')
console.log(btn.classList);


// TRAVERSING THE DOM
const item = document.querySelector('.collection-item');
const parent = item.parentElement
// const container = parent.parentElement;

console.log(parent);

const collection = document.querySelector('.collection')

console.log(parent===collection);

// even counts line breaks
console.log(collection.childNodes);
console.log(collection.firstChild);
console.log(collection.nextSibling);
console.log(collection.previousSibling);

// preferable
console.log(collection.children);
console.log(collection.firstElementChild);
console.log(collection.nextElementSibling);
console.log(collection.previousElementSibling);


// CREATION OF DOM ELEMENTS
const newContainer = document.createElement('div')
newContainer.className = 'container'
newContainer.id = 'container2'
newContainer.setAttribute('title', 'div2')

// newContainer.innerText = 'hello div'

const newTextNode = document.createTextNode('hello div')
newContainer.appendChild(newTextNode);

// console.log(newContainer);

const title = document.querySelector('.container p');
const input = document.querySelector('input[type=text]')
const container = document.querySelector('.container')

// container.insertBefore(newContainer, title)

// title.appendChild(newContainer)


// EVENTS
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