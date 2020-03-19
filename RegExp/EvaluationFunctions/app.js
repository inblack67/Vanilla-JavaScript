let re;
re = /hello/;
re = /hello/i; // i makes it case insensitive
// re = /hello/g; // will search all instances of hello not just the first one

// console.log(re);
// console.log(re.source);


// =========================

// exec() = returns result in an array if found, or else null

// const result = re.exec('hello worlds'); // index = 0
// hi worlds = null
// helloweded = still true
// console.log(result);
// console.log(result[0]);
// console.log(result.input); // what is the source
// console.log(result.index); // hello is at zero


// =========================

// test() = true or false
// const result = re.test('Hello');
// console.log(result);

// =========================

// match() = return result array or null
// similar to exec but processing is opposite, as we pass the string in the regx

// const str = 'hello how low';
// const result = str.match(re);
// console.log(result); // same thang


// =========================

// search() = returns first appearance or -1
// const str = 'Hello Hell';
// const result = str.search(re);
// console.log(result);


// =========================

// replace() = return new string with some or all matches of a pattern

const str = 'Hello Hell';
const newStr = str.replace('Hello','hi');
console.log(newStr);



