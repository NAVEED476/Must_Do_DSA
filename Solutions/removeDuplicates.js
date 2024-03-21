function removeDuplicates(arr){
    return arr.filter((value,index)=>arr.indexOf(value) === index)
}

let arr = [1,2,3]

console.log(removeDuplicates(arr))