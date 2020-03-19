// document.getElementById('button').addEventListener('click',loadData);

// function loadData()
// {
//   // xhr object
//   const xhr = new XMLHttpRequest();


//   // open
//   xhr.open('GET','data.txt',true);


//   // used for spinners and loaders
//   xhr.onprogress = function(){
//     console.log('Readystate ' + this.readyState); // 3 - processing request
//   }



//   xhr.onload = function(){
//     if(this.status===200)
//     {
//       console.log(xhr.readyState);

//       document.getElementById('output').innerHTML = `<h1>${this.responseText}<h1>`;
//     }
//   }

//   xhr.onerror = function(){
//     console.log('Request error');
//   }

//   xhr.send();
// } 






//=======callbacks===========

const posts = 
[
{
id: 1,
title: 'title1',
body: 'body1'
},

{
id: 2,
title: 'title2',
body: 'body2'
},

{
id: 3,
title: 'title3',
body: 'body3'
}

];

const post = 
{
  id: 4,
  title: 'title4',
  body: 'body4'
};

function createPost(post)
{
  return new Promise(function(resolve,reject)
  {
    setTimeout(function(){
      posts.push(post);
        resolve();
    },3000);
  });
  
  

}



function getPost()
{
  setTimeout(function(){

    let output = '';

    posts.forEach(function(post){

      output +=
      `
      <li>${post.title}</li>
      
      `

      document.getElementById('output').innerHTML = output;

      
      

    })
  },2000)
}

createPost().then(getPost);
// getPost();











// function createPost(callback)
// {
//   setTimeout(function(){
//     posts.push({id: 4,
//       title: 'title4',
//       body: 'body4'});
//       callback();
//   },3000);
// }

// function getPost()
// {
//   setTimeout(function(){
//     let output = '';
//   posts.forEach(function(post){
//     output+=
//     `
//     <li>${post.title}</li>
    
//     `
//   });

//   document.body.innerHTML = output;
//   },2000);
// }

// createPost(getPost);
// // getPost();