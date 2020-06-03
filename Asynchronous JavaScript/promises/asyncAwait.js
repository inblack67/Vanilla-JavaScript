function promise(){
    return new Promise(res => res('Resolev bitch'));
}

const fun = async () => {
    // code is synchronous now - thats why try catch works fine
    const res = await promise();
    console.log(res);
    console.log('TEST');
}

// fun();

// async function itself returns promise so
fun().then(_ => console.log('Finished'));