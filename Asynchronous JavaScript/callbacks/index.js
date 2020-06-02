function async(cb){
    // setImmediate(cb);
    // process.nextTick(cb);
    setTimeout(() => {
        cb();
    }, 1);
}

async(_ => console.log(message));

let message = 'I am Iron Man';