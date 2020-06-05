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