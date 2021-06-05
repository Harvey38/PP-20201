// class abc{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age
//         this.sayHi = this.sayHi.bind(this)
//     }

//     sayHi()
//     {
//         console.log('Hello');
//         console.log(this);
//         console.log(this.name);
//     }

// }

// let obj = new abc('Tushar',22);
// console.log(obj);
// obj.sayHi();
// let btn = document.querySelector('button');
// btn.addEventListener('click',obj.sayHi);

//////////////////////////////////Arrow Function


class abc{
    constructor(name,age)
    {
        this.name=name;
        this.age=age
    }
    sayHi=()=>
    {
        console.log('Hello');
        console.log(this);
        console.log(this.name);
    }
}

let obj = new abc('Tushar',22);
console.log(obj);
obj.sayHi();
let btn = document.querySelector('button');
btn.addEventListener('click',obj.sayHi);

