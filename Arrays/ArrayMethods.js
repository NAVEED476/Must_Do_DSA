let arr = [1,2,3,4,5];

// **How do you reverse an array?**

function reverseArray(arr){

    // use directly reverse method

    // let reversed = arr.reverse();
    // return reversed;

    //use for loop

    const reversed = [];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i])
    }
    return reversed

}

console.log(reverseArray(arr));


//  **How do you sort an array in JavaScript?**

let arr1 = [1,4,2,4,5,67,345,6,0]


function sortArr (arr){
    let sorted = arr.sort((a,b)=>a-b);
    return sorted; 
}
console.log(sortArr(arr1));


// **What is the `find()` method, and how does it work?**

const arr2 = [1,2,4,5,6,10,11,23,25];
const val = 4
function findMethod(arr,val){
    let findVal = arr.find(ele => ele === val );
    return findVal;
}
console.log(findMethod(arr2,val))

// **How can you flatten a nested array?**

const arr3 = [1,2,[2,[3],[5],4,[4,9,[5]]]]

function flatArr(arr){
    // we have to provide infinity value to check the depth of the nested value
 let newArr = arr.flat(Infinity);
 return newArr;
}
console.log(flatArr(arr3));