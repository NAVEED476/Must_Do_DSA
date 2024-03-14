

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = []
  let rightArr= []
  for (let i = 0; i < arr.length-1; i++) {
    if(arr[i]<pivot){
        leftArr.push(arr[i])
    }
    else{
        rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
const arr = [1, 8, 3, 9, 4, 5, 7];
console.log(quickSort(arr))