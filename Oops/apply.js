'use strict';

const greetings = {
    greet: function(){
        console.log(this);
        function reply(a, b, c){
            console.log(this);  // undef or window object normally
            console.log(a,b,c);
        }
        reply.apply(greetings, [1, 2, 3]); // now it points to greetings object
    }
}

greetings.greet();