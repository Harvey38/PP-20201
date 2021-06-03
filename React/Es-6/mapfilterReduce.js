// let arr = [1,2,3,4,5,6];
// // let darr =[];
// // for(let i=0;i<arr.length;i++)
// // {
// //     darr[i]=arr[i]*2;
// // }
// // console.log(darr);

// // map function
// //  It is a higher order function 
// //that either accepts a function as an argument or return a function
// let df = function(el){
//     console.log(el);
//     return 2*el;
// }
// let darr = arr.map(df);
// console.log(darr);
// console.log(arr);

/////////////////////filter///////////////////////////////////////

// let words =['spray', 'limit', 'elite','polite', 'destruction','presents'];

// // let darr=[];
// // for(let i=0;i<words.length;i++)
// // {
// //     let word= words[i];
// //     if(word.length>6)
// //     {
// //         darr.push(word);
// //     }
// // }
// // console.log(darr);

// let darr = words.filter(function(word){
//     return word.length>6;
// })
// console.log(darr);

///////////////////////////////////Reduce//////////////////////////////

let arr = [1,2,3,4,5,6];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
//     sum+= arr[i];
// }
// console.log(sum);

let sum = arr.reduce(function(acc,cval){
    console.log('acc -> '+acc+"  "+'cval -> '+cval);
    return acc+cval;
})
console.log(sum);