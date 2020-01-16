// one line functions does not need braces
const hello = () => console.log('hello');

const returnHello = () => 'Hello';  

const returnObject = 
() => ({msg: 'hello'});


// single param
const sayMyName = name => console.log(`I'm ${name}`);

// multiple params need parenthesis
const realName = (firstName,lastName) => console.log(firstName + ' ' + lastName);

const users = ['name','age','sex'];
const display = users.map((name) => name.length);

hello();
console.log(returnHello());
console.log(returnObject());
sayMyName('Heisenberg');
realName('Walter','White');
console.log(display);