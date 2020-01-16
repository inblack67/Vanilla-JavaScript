class Cheat
{

  // GET Request
  async get(url)
  {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  }


  // POST Request

 async post(url, data)
  {
     const response =  await fetch(url, {
      method: 'POST',
      headers: 
      {
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify(data)
    })

    const data2 = await response.json();

    return data2;


  }

  async put(url, data)
  {
    const response = await fetch(url, {
      method: 'PUT',
      headers: 
      {
        'Content-Type': 'applicaton/json'
      },
      body: JSON.stringify(data)
    })

    const data3 = await response.json();

    return data3
  }


  async delete(url)
  {
    const response = await  fetch(url, {
      method: 'DELETE',
      headers: 
      {
        'Content-Type': 'applicaton/json'
      }
    })

    const data4 = await 'Resource Deleted';

    return data4;
}
}



   


// https://jsonplaceholder.typicode.com/users

