const str = 'Aman';
let res = str.padStart(10, 'a');
res = str.padEnd(10, 'a');

console.log(res);
console.log(res.length);

res = str.padStart(100); // length of res will be 100 with 96 empty char but it's too smart to print them all out