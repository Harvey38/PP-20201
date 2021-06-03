let person = {name:'Steve',country:'Los Angeles',job:'Avenger'};

// let name = person.name;
// let country = person.country;
// let job = person.job;
// console.log(name);
// console.log(country);
// console.log(job);

/////////Destructuring

// let {name,country,job} =person;
// console.log(name);
// console.log(country);
// console.log(job);
/////////////////////////////////
let {name,country,profession='default-value',job}=person;
console.log(name);
console.log(country);
console.log(profession);
console.log(job);

//////////////////Aliases///////////////////

// let {name:a,country:b,job:c}=person;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(person);