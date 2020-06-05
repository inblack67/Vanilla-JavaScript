const iteration = () => ({
    [Symbol.iterator]: () => ({
        x: 0,
        next(){
            if(this.x > 10){
                return {
                    done: true,
                    value: this.x
                }
            }   
            return {
                done: false,
                value: this.x++
            } 
        }
    })
})

for (const i of iteration()) {
    // console.log(i);
}

// async-iterator - returns promise
const asyncIteration = () => ({
    [Symbol.asyncIterator]: () => ({
        x: 0,
        next(){
            if(this.x > 10){
                return Promise.resolve({
                    done: true,
                    value: this.x
                })
            }  
            let y = this.x++;
            return Promise.resolve({
                done: false,
                value: y
            })
        }
    })
})

(async () => {
    for await (let x of asyncIteration()) {
      console.log(x);
    }
  })();

  const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

const fileIteration = files => ({
    [Symbol.asyncIterator]: () => ({
        x:0,
        next(){
            if(this.x < files.length){
                return Promise.resolve({ done: true })
            }
            files.forEach(file => {
                return readFile(file, 'utf-8').then(data => ({
                    done: false,
                    value: data
                }));
            })
        }
    })
})

const res =  async () => {
    for await (let x of fileIteration([
        "./node/files/demofile.txt",
        "./node/files/demofile.other.txt"
      ])) {
        console.log(x);
      }
}

res();
