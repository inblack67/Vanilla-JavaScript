// primitve datatype -> can never be the same -> unique object keys (eg. object properties)
const sym1 = Symbol(1);  // no 'new' as it does not have any ctor (primitive)
const sym2 = Symbol(1);
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2); // false, even with same identifiers

// console.log(`Symbol:- ${sym2}`); // cannot convert a symbol value to a string
console.log(`Symbol:- ${sym2.toString()}`); // works now

// Unique object keys
const key1 = Symbol('key1');
const key2 = Symbol();
const obj = {};
obj[key1] = 'Prop-1';       // obj.key1 -> cant use while assigning vars as keys to an obj
obj[key2] = 'Prop-2';
// regular props
obj.key3 = 'Prop-3';
obj.key4 = 'Prop-4';
console.log(obj);


// Symbols are not enumerable in for iteration
for (const i in obj) {
    console.log(i); // key3, key4 only
}

const object2 = { name: 'Aman', age: 22 };
for (const i in object2) {
    console.log(object2[i]);
}