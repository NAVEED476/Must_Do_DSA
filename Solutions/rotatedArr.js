

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// The array may contain duplicates.

function rotatedArr(arr,r){
    
    for(let i=0;i<r;i++){
        const newEle = arr.shift(arr[i])
        arr.push(newEle)

    }
    return arr
}


const arr = [4,5,6,7,0,1,2]
const r = 4
console.log(rotatedArr(arr,r))