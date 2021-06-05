const state = {
    name:'Tushar',
    address:{
        city:'London',
        country:{
            countrName:'United Kingdom',
            countryCode:'Uk'
        }
    }
}

//I need to make changes into this object immutably
// let copy = state;
// copy.name='Alexander';
// console.log(state);
// console.log(copy);


// let copy = {...state};
//This is known as shallow copy
// Shallow in this context means that for any given object that is spread,
// the uppermost level of the new variable is a new object containing the values of the original object , 
// but at a new reference
// Any lower level or nested objects however will keep pointing to their original references.
// // copy.name ='Alexander';

// copy.address.city='Delhi';

// console.log(state);
// console.log(copy);

let copy ={...state,address:{...state.address,
    country:{...state.address.country}}};

// copy.address.city='Delhi';

copy.address.country.countrName='India';

console.log(state);
console.log(copy);