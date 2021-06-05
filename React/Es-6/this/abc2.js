// function fn()
// {
//     console.log(`Hi my name is ${this.person}`);
//     console.log(this);
//     function abc()
//     {
//         console.log(this.person);
//     }
//     abc();
// }

// let obj ={
//     person:'Tushar',
//     func:fn
// }
// obj.func();

//////////////////////////////////bind

// let ret= function.bind(argument);
//  ret is a function
// ret ka jo this h that becomes equal to the passed argument


// function fn()
// {
//     console.log(`Hi my name is ${this.person}`);
//     console.log(this);
//     function abc()
//     {
//         console.log(this.person);
//     }
//     let rf = abc.bind(this);
//     rf();
// }

// let obj ={
//     person:'Tushar',
//     func:fn
// }
// obj.func();

////////////////////////////////////////////////Arrow FN

function fn()
{
    console.log(`Hi my name is ${this.person}`);
    console.log(this);
   let abc = ()=>{
       console.log(this.person);
   }
   abc();
   
}

let obj ={
    person:'Tushar',
    func:fn
}
obj.func();

