// const sym = Symbol('sym');

// console.log(Symbol('1')===Symbol('1'));

// console.log(`hell to ${sym.toString()}`);

// console.log(`hell to ${String(sym)}`);


const KEY1 = Symbol('sym1');
const KEY2 = Symbol('sym2');
const obj = {};
obj.KEY1 = 'prop1';
obj[KEY2] = 'prop2';
// console.log(obj);
// console.log(obj.KEY1);
// console.log(obj[KEY2]);

for(let i in obj)
{
  console.log(obj[i]); // prop2 wont show
}

// json.stringify ignores symbols - {} <- result
console.log(JSON.stringify({
  [Symbol('sym3')] : 'prop3'
}))
