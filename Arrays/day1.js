// how to check the variable is an array

let arr = [];

console.log(Array.isArray(arr));


// how to combine two arrays

let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log([...arr1,...arr2]);

// find the index of the praticluar element!

const arr3 = ['apple',"banana","mango"];

// find banana index

console.log('banana index',arr3.indexOf('banana'))

const arr4 = [1,2,3,4]

console.log(arr4.includes(3));