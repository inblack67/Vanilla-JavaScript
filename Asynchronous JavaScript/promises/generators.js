function* range(){
    for (let i = 0; i < 5; i++) {
        yield i;        
    }
    yield 'ok';
    return 1;
}

const it = range();
for (const i of it) {
    // console.log(i); // 0-4 and ok
}
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next()); // {value: 'ok', done: true}
// console.log(it.next());

// passing args to yield
function* sayHello(){
    console.log(yield);
    console.log('World');
}

const it2 = sayHello();
it2.next();
it2.next('Hello');

// async generators
function* asyncGenerator() {
    for (let i = 0; i < 10; i++) {
        yield Promise.resolve(i);
    }
}

const it3 = asyncGenerator();

(async () => {
    for await (let num of it3) {
        console.log(num);
      }
})();