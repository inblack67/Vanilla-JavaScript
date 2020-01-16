  // function myFunction()
  // {
  //   return 'hello';
  // }

  // console.log(myFunction());



  // adding just async will make it return the promise

  // async function myFunction()
  // {
  //   return 'hell';
  // }

  // myFunction()
  // .then(res => console.log(res))



  // await wait until promise is resolved

  // async function myFunction()
  // {
  //   const promise = new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve('helloww');
  //     }, 2000);
  //   })

  
  //   const err = false;

  //   if(!err)
  //   {
  //     const res = await promise;
  //     return res;
  //   }

  //   else
  //   {
  //     await Promise.reject(new Error('Something went wrong'));
  //   }
    
    
  // }

  // myFunction()
  // .then((res) => console.log(res))
  // .catch(err => console.log(err));


  async function getUsers()
  {
    // await response of the fetch call
    const response = await 
    fetch('https://jsonplaceholder.typicode.com/users');


    // only proceed once its resolved
    const data = await response.json();

    // only procees once second promise is resolved
    return data;
  }


  getUsers().then(users => console.log(users));