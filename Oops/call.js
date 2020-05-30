'use strict'; // this will be undefined normally with strict mode on

// in javascript fns are objects
function hello(param1, param2){
    console.log(this);
}

hello.reply = 'hell-low';
// hello()
hello.call(1); // arg is the value of this

const greetings = {
    greet: function(){
        console.log(this);
        function reply(a, b, c){
            console.log(this);  // undef or window object normally
            console.log(a,b,c);
        }
        reply.call(greetings, 1, 2, 3); // now it points to greetings object
    }
}

greetings.greet();