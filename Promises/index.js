const axios = require('axios');

const getData = () => {
    console.log('object');
}

getData();

const getValue = () => Promise.resolve(25);

const first = getValue();

first.then(x => x + 10);

const res = first.then(x => x + 10);

res.then(val => console.log(val));  // 35