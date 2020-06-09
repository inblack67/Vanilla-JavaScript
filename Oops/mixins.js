const canEat = {
    eat: () => console.log('Eating...'),
}

const canWalk = {
    walk: () => console.log('Walking...'),
}

function Person(){};

const mixin = (target, ...sources) => {
    Object.assign(target, ...sources);
}

Object.assign(Person.prototype, canEat, canWalk);

const newPerson = new Person();
console.log(newPerson);

