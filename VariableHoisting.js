'use strict';

console.log(a); // undefined
var a = 1;  // let and const would give error

greet();

function greet(){
    let a = 1;
    console.log('hello hell');
    console.log(a);
}
