// // structure

// (() => {
//     // desclare private vars & funcions


//     return {
//         // desclare public vars & funcions
//     }

// })();

// Standard Module Pattern
const UIController = (() => {

    // prvt
    let text = 'Hello Hells';

    const changeText = () => {
        const element = document.querySelector('h1');
        element.textContent = text;
    }


    // publc
    return {
        callChangeText: () => {
            changeText();
            console.log(text)
        }
    }

})();

// UIController.callChangeText();


// Revealing Module Pattern
const ItemController = (() => {
    let data = [];

    const addItem = (item) => {
        data.push(item);
        console.log('Item Added')
    }

    const getItem = (id) => data.find(item => item.id === id)

    return {
        get: getItem,
        add: addItem
    }

})();

ItemController.add({ id: 1, name: 'Doe' })
console.log(ItemController.get(1))