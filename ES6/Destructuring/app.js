let a,b;

[a,b] = [100,200];

// rest pattern
[a,b,...rest] = [100,200,300,400,500];
// console.log(rest);


// Array Destructuring
const people = ['John', 'Doe', "Tyler", 'Durden'];
const [p1, p2, p3] = people;
// console.log(p1,p2,p3);

function getPeople()
{
  return ['John', 'Doe', "Tyler", 'Durden'];
}

const [p5,p6, ...res] = getPeople();
// console.log(p5,p6,res);


// OBJECT DESTRUCTURING

const person = {
  name: 'John Doe',
  age: 30,
  location: 'NYC'
}

// es5
// let name = person.name;
// console.log(name);

// es6
const {name, age, ...re} = person;

console.log(name,age,re)