const fs = require("fs");
const util = require('util');

// const readFile = util.promisify(fs.readFile);  // does the same thing 

function readFile(filename, encoding) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if(err){
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  })
  return promise;
}

readFile("./node/files/demofile.txt", "utf-8").then(data => console.log(data), err => console.error(err));


const getValue = () => Promise.resolve(25);

const first = getValue();

first.then(x => x + 10);

const res = first.then(x => x + 10);

res.then(val => console.log(val));  // 35