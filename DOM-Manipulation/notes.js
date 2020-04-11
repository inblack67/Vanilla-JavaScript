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
