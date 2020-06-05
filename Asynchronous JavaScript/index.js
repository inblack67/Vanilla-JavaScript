const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

function* fileLoader(files) {
    const promises = files.map(file => readFile(file, 'utf8'));
    for (const i of promises) {
        yield i;
    }
}

(async () => {
  for await (let contents of fileLoader([
    "./node/files/demofile.txt",
    "./node/files/demofile.other.txt"
  ])) {
    console.log(contents);
  }
})();