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