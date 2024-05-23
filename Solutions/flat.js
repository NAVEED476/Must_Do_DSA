function flattenArr(arr) {
    // let result = [];
    // let stack = [...arr];

    // while(stack.length){
    //     let next = stack.pop();
    //     if(Array.isArray(next)){
    //         stack.push(...next)
    //     }
    //     else{
    //         result.push(next)
    //     }
    // }
    // return result.reverse();

    // let result = [];
    // let stack = [...arr];

    // while(stack.length){
    //     let next = stack.pop();
    //     if(Array.isArray(next)){
    //         stack.push(...next)
    //     }
    //     else{
    //         result.push(next)
    //     }
    // }
    // return result.reverse();

    // let result = [];
    // let stack = [...arr]
    // while(stack.length){
    //     let next = stack.pop();

    //     if(Array.isArray(next)){

    //         stack.push(...next)
    //     }
    //     else{
    //         result.push(next)
    //     }
    // }
    // return result


  let result = []

  arr.forEach(ele => {
    if(Array.isArray(ele)){
        result = result.concat((flattenArr(ele)))
    }
    else{
        result.push(ele)
    }
  });
  return result
}

const nestedArray = [1, [2, [3, 4], 5], 6];
var twoDimension = [[1], [2], 3, 4, [5]];
console.log(flattenArr(nestedArray));
console.log(flattenArr(twoDimension));
