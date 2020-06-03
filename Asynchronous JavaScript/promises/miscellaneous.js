// Create a process flow which publishes a file from a server, then realises the user needs to login, then makes a login request, the whole chain should error out if it takes longer than 1 seconds. Use `catch` to handle errors and timeouts.
function authenticate() {
    console.log("Authenticating");
    return new Promise(resolve => setTimeout(resolve, 500, { status: 200 }));
  }
  
  function publish() {
    return new Promise(resolve => setTimeout(resolve, 502, { status: 403 }));
  }
  
  function timeout(sleep) {
    return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
  }

  function publishProcess(){
      return publish().then(res => {
          if(res.status === 403){
              return authenticate();
          }
          return res;
      })
  }

  Promise.race( [publishProcess(), timeout(1000)] )
  .then(_ => console.log('Published'))
  .catch(err => {
      if(err === 'timeout'){
          console.error('Req timed out');
      }
      else{
          console.error(err);
      }
  })