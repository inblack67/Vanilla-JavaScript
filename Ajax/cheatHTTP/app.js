const http = new cheatHTTP; 

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){

// if(err)
// {
//   console.log(err);
// }
// else
// {
//   console.log(response);
// }

// }); // asynch.



// post

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
// if(err)
// {
// console.log(err);
// }
// else
// {
// console.log(response);
// }
// });
// });


// put

http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){

  if(err)
  {
  console.log(err);
  }
  else
  {
  console.log(response);
  }
  });



  // DELETE POST

  http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){

if(err)
{
  console.log(err);
}
else
{
  console.log(response);
}

});