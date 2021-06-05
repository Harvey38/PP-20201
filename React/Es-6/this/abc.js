// console.log(this);// Here in the browser the this
// in global is equal to the window object
var a =5;
// console.log(a);

// we only need this for function calling

function fn()
{
    // 'use strict' //when used it causes the value of this when called without an object to be undefined.
    console.log(`Hi my name is ${this.person}`);
    console.log(this);
}

let obj = {
    person:'Tushar',
    fon:function(){
        console.log(`Hi my name is ${this.person}`);
    console.log(this);
    }
}
//when it comes to functions
// the binding of this occurs at runtime
// fn();
// obj.fon();
let rf = obj.fon;
rf();
