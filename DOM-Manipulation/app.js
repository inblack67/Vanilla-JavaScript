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