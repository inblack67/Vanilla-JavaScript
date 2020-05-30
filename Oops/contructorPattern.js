// 'use strict';

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const developer = new Person('Aman', 'Bhardwaj');
console.log(developer);
console.log(developer.fullName());

Person.prototype.occupation = function(){
    return `${this.fullName()} is a full-stack JavaScript Developer`;
}

console.log(developer.occupation());


// without new keyword
// const dev = {};
// Person.call(dev, 'Aman', 'Bhardwaj');
// console.log(dev);



// const person0 = Person('Aman', 'Bhardwaj');
// console.log(window.firstName, window.lastName);