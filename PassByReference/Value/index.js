// Primitive types (number, string, boolean) are passed by value (cant be changed by third party functions)
// Reference types (objects) can be changed as they are passed by reference

const a = 1;
const name = {};
function change(a, name){
    a = 2;
    name.firstName = 'Aman';
    name.lastName = 'Bhardwaj';
    // but the function cannot change what name object points to, it can only change its props not its dest.
    name = { 'hell': 'no' };
}

change(a, name);
console.log(a);
console.log(name);