// 'use strict';
// tells undefined declaration of variables
// alarm on using future version of js keywords
// doesnt let the deletion of vars and fns or their arguments

function strictMode(){
    // 'user strict';
    // strict to this block only
    let count = 0;
    // coun = 0;
    if(count > 0){
        console.log('No issues');
    }
}

strictMode();
// delete strictMode;

eval('var b = 2;');
console.log(b); // not avail in strict mode, if used let, not avail at all