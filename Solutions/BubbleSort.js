function bubbleSort(arr, n) {
  let temp;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
      }
    }
  }
  return arr
}
function Duplicates (arr){
    return arr.filter((ele,index)=> arr.indexOf(ele) === index)
}
let arr1 = [3, 5, 3, 4, 6, 1, 3, 5, 6, 1, 4, 5];
let n = arr1.length;
let sortedArr = bubbleSort(arr1,n)
console.log(Duplicates(sortedArr))
console.log(bubbleSort(arr1, n));
