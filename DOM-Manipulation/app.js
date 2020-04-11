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