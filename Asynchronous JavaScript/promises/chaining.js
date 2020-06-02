const fs = require("fs");
const zlib = require("zlib");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const zlibPromise = util.promisify(zlib.gzip);

readFile("./node/files/demofile.txt", "utf-8").then(data => zlibPromise(data).then(data => console.log(`Final: ${data}`), err => console.error(`Zip Failed: ${err}`)), err => console.error(`Read Failed: ${err}`));

// still nesting issues - promise then hell