// get text
document.querySelector('#text').addEventListener('click',getText);

// get json
document.querySelector('#json').addEventListener('click',getJSON);


// get api data (git users)
document.querySelector('#api').addEventListener('click',getAPI);

function getText(){
  fetch('test.txt')

  .then(res => res.text())

  .then(data =>
  {
    document.querySelector('#output').innerHTML = 
    `
    <p>${data}</p>
    `;
  })

  .catch(err => console.log(err));
}

function getJSON()
{
  fetch('posts.json')

  .then(function(res)
  {
    return res.json();
  })

  .then(function(data)
  {
    let output = '';

    data.forEach(function(post){
      output +=
      `
      <li>${post.name}</li>
      `
    });

    document.querySelector('#output').innerHTML = output;
  })
}



// https://api.github.com/users


function getAPI()
{
  fetch('https://api.github.com/users')

  .then(function(res)
  {
    return res.json();
  })

  .then(function(data)
  {
    let output = '';

    data.forEach(function(user){
      output +=
      `
      <li>${user.login}</li>
      `
    });

    document.querySelector('#output').innerHTML = output;
  })
}