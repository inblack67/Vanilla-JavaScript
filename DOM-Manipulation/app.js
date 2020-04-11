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

