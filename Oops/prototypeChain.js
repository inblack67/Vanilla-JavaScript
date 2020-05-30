// Objects in JS are linked to others via prototype chain and when looking for porperty, JS traverse the proto object and only returns undefined if it cant find the property in all the objects in the chain
// manually edit th chain __proto__ or Object.creat()

const animal = {
    tiger: 'Deceased'
}

// Object.create()  -> recommended way
const human = Object.create(animal, { name: { value: 'Doppo Orochi' } });    // animal object added to human's proto
console.log(human); // second params of Object.creat() DESCRIBES the properties you wanna create on the created object (human here)


// const human = {
//     name: 'Doppo Orochi'
// }

// human.__proto__ = animal;   // tiger added to proto object of human

// // console.log(human.tiger);
// // console.log(animal.isPrototypeOf(human));       // true

// animal.tiger = 'alive';
// console.log(animal.tiger);     // alive
// console.log(human.tiger);      // alive

// human.tiger = 'Deceased';
// console.log(animal.tiger);  // alive
// console.log(human.tiger);  // Deceased

// // so if original tiger prop of animal object is changed the change will reflect in the human proto animal object too but not the vice versa is true