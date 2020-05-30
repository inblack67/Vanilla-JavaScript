// Arrows dont rebind this, they dont affect this keyword at all

function hello() {
    console.log(this);
}

function hello() {
    console.log(this);
    const hell = () => {
        console.log(this);
    }
    hell()
}

const o1 = new hello();
  
  // hello()
  
  const greet = {
      hello: function(){
          console.log(this);
          const hell = () => {
              console.log(this);
              const hellow = () => {
                  console.log(this);
              }
              hellow();
          }
          hell()
      }
  }
  
  greet.hello()