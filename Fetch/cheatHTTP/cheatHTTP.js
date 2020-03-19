class Cheat
{

  // GET Request
  get(url)
  {
    return new Promise((resolve,reject) => 
    {
      fetch(url)
      .then(res => res.json())
      .then((data => resolve(data)))
      .catch((err => reject(err)))
    });
  }


  // POST Request

  post(url, data)
  {
    return new Promise((resolve, reject) => 
    {
      fetch(url, {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'applicaton/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
      ;
    });
  }

  put(url, data)
  {
    return new Promise((resolve, reject) => 
    {
      fetch(url, {
        method: 'PUT',
        headers: 
        {
          'Content-Type': 'applicaton/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
      ;
    });
  }


  delete(url)
  {
    return new Promise((resolve, reject) => 
    {
      fetch(url, {
        method: 'DELETE',
        headers: 
        {
          'Content-Type': 'applicaton/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resolved delete....'))
      .catch(err => reject(err))
      ;
    });
  }
}




   
/* 

https://jsonplaceholder.typicode.com/users

*/