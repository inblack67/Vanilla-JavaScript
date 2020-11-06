let promises = [];
let count = 0;
for (let u = count; u < 10; u++) {
	promises.push(Promise.resolve(u));
	count += 1;
}

Promise.all(promises).then((data) => console.log(data));
Promise.race(promises).then((data) => console.log(data));
