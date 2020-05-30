// this is determined by the calling context

console.log(this);  // window object

function hello (){
    console.log(this); // window
}

hello();

const greet = {
    hello: function(){
        // soln = 'use strict'
        // let self = this; // now self points to greet object always
        console.log(this);  // points to the greet object who's function this is

        function noGreet(){
            console.log(this);  // window
            this.crap = 1;  // setting crap property on window object
        }
        noGreet()
        console.log('crap is', this.crap); // undefined as this here points to greet object
        console.log('crap is', window.crap);  // ok
    }
}

greet.hello()

const func = greet.hello;
// func(); // window