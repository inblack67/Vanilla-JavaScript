let re;

re = /hello/;
re = /hello/i;  // case insensitive
re = /hello/g;  // will search all the instances not just the one
re = /hello/ig;
re = /hello/

console.log(re.source);

const res1 = re.exec('hello worlds');
console.log(res1);

// test - has to match exaclty no g i exceptions
const res2 = re.test('hello');
console.log(res2);

const str = 'yohello bitches';
const res3 = str.match(re);
console.log(res3);

// str starts at 2nd postion
const res4 = str.search(re);
console.log(res4);


const res5 = str.replace('hello', 'hi');
console.log(res5);

