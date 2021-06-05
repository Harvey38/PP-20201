let introduction =['Hello','I','am','Tushar'];
// let greeting = introduction[0];
// let pronoun = introduction[1];
// let variable = introduction[2];
// let name = introduction[3];


// let [greeting,pronoun,variable,name] = introduction;
// console.log(greeting);
// console.log(pronoun);
// console.log(variable);
// console.log(name);

//skipping values

// let [greeting,pronoun,,name]=introduction;
// console.log(name);
// console.log(greeting);
// console.log(pronoun);

// let newarr =['Hello'];
// let [greeting='Howdy',pronoun='has',name='Stark']=newarr;
// console.log(greeting);
// console.log(pronoun)
// console.log(name);;

// let a =3;
// let b =6;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

let arr = [1,2,3,4,5,6,7,8,9,10,11];
let [fv,sv,tv,...narr]=arr;
// console.log(fv);
// console.log(sv);
// console.log(tv);
// console.log(narr);
narr[0] = 40;
console.log(narr);
console.log(arr);