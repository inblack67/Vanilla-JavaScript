function readFileFake(sleep) {
    if(sleep > 1000){
        return new Promise((_, reject) => 'Rejected');
    }
    else{
        return new Promise(resolve => setTimeout(resolve, sleep, `${sleep} wins`));
    }
  }
  
const arr = [readFileFake(5000), readFileFake(300), readFileFake(10000)];
Promise.race(arr).then(data => console.log(data));

// Race
const promise1 = new Promise(res => setTimeout(res, 1000, 'prom-1'));
const promise2 = new Promise(res => setTimeout(res, 2000, 'prom-2'));

Promise.race([promise1, promise2]).then(data => console.log(data));
