let arr =[0,1,2,3,4,5,6];
let earr2 = arr;

let index=3;
//I have to insert a number 10 at index 3
// i have to make this change not in this array(immutably);

// for(let i=0;i<index;i++)
// {
//     narr[i]=arr[i];
// }
// narr.push(10);
// for(let i=index;i<arr.length;i++)
// {
//     narr.push(arr[i]);
// }
// console.log(narr);
// console.log(arr);

let narr=[...arr.slice(0,index),10,...arr.slice(index)];
let earr = [...arr]
console.log(narr);
// console.log(earr);
earr[0] =100;
// console.log(earr);
// console.log(arr);
// earr2[0]=1000;
// console.log(earr2);
// console.log(arr);

