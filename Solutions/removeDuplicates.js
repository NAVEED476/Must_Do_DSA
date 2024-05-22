// function removeDuplicates(arr){
//     return arr.filter((value,index)=>arr.indexOf(value) === index)
// }

// let arr = [1,2,3]

// console.log(removeDuplicates(arr))

function removeDup(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < duplicates.length; j++) {
      if (arr[i] === duplicates[j]) {
        count++;
      }
    }
    if (count == 0) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

const arr1 = [1, 2, 2, 3, 1, 2, 3];
// console.log(removeDup(arr));


function dup1(arr){
    return arr.filter((value,index) =>arr.indexOf(value) === index)

}
console.log(dup1(arr1))