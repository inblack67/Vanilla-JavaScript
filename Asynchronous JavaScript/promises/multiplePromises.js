const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./node/files/demofile.txt", "./node/files/demofile.other.txt"];

// All
const promises = files.map(path => readFile(path, 'utf-8'));
Promise.all(promises).then(data => console.log(data)).catch(err => console.error(err));


// Race
const promise1 = new Promise(res => setTimeout(res, 1000, 'prom-1'));
const promise2 = new Promise(res => setTimeout(res, 2000, 'prom-2'));

Promise.race([promise1, promise2]).then(data => console.log(data));
