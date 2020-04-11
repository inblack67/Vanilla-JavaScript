const input = document.querySelector('input[type=text]');
const form = document.querySelector('form');
const list = document.querySelector('.collection');
const listItems = document.querySelectorAll('.collection-item')
const filter = document.querySelector('#filter')

let item = '';
const listItemsArray = Array.from(listItems);


// events
input.addEventListener('keyup', onType);
form.addEventListener('submit', onSubmit);
list.addEventListener('click', remove)
filter.addEventListener('keyup', filterItems)


// functions
function onType(e){
    item = e.target.value;
}

function onSubmit(e){

    e.preventDefault();

    input.value = '';

    if(item === ''){
        M.toast({ html: 'Start Typing...' })
        return;
    }

    const element = document.createElement('li')
    element.classList.add('collection-item');
    const text = document.createTextNode(item);
    const icon = document.createElement('i');
    icon.className = 'material-icons secondary-content red-text'
    const iconText = document.createTextNode('delete')
    icon.appendChild(iconText)
    element.appendChild(text);
    element.appendChild(icon);

    list.appendChild(element)

}

function remove(e){
    if(e.target.textContent){
        e.target.parentElement.remove();
    }
}

function filterItems(e){
    const filterData = e.target.value.toLowerCase();
    listItems.forEach(item => {
        let itemName = item.textContent;
        if(itemName.toLowerCase().indexOf(filterData) !== -1){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
}

