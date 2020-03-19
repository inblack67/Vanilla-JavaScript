function cheatHTTP()
{
this.http = new XMLHttpRequest();
}


//      GET

// cheatHTTP.prototype.get = function(url,callback)
// {
// this.http.open('GET',url,true);

// let self = this;

// this.http.onload = 
// function()
// {
// if(self.http.status===200)
// {
// callback(null,self.http.responseText);
// }
// else
// {
// callback('Error: ',self.http.status);
// }
// }

// this.http.send();
// }


//================================
// POST REQUEST

const data = {
  title: "title1",
  name: "John Doe"
}

// cheatHTTP.prototype.post = function(url,data,callback){

// this.http.open('POST',url,true);

// this.http.setRequestHeader('Content-Type','application/json');

// let self = this;
// this.http.onload = 
// function(){
//   callback(null,self.http.responseText);
// }

// this.http.send(JSON.stringify(data));
// }



// ============================
//put

cheatHTTP.prototype.put = function(url,data,callback)
{

  this.http.open('PUT',url,true);
  
  this.http.setRequestHeader('Content-Type','application/json');
  
  let self = this;
  this.http.onload = 
  function(){
    callback(null,self.http.responseText);
  }
  this.http.send(JSON.stringify(data))
}



// ===============================
//        DELETE

cheatHTTP.prototype.delete = function(url,callback)
{
this.http.open('DELETE',url,true);

let self = this;

this.http.onload = 
function()
{
if(self.http.status===200)
{
callback(null,'POST DELETED');
}
else
{
callback('Error: ',self.http.status);
}
}

this.http.send();
}


