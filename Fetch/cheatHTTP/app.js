const http = new Cheat;


// GET
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err))
;


//POST

const data = 
{
  name: 'A-MAN',
  username: 'xyz',
  email: 'crap@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data => console.log(data))
.catch(err => console.log(err))
;


http.put('https://jsonplaceholder.typicode.com/users/2',data)
.then(data => console.log(data))
.catch(err => console.log(err))
;


http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err))
;

