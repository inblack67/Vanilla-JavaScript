'use strict';

const arrow = {
    greet: () => {
        const rep = function(){
            console.log(this);
        }.bind(arrow)
    }
}

arrow.greet();