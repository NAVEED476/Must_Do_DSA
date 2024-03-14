let arr = [1,2,3,4,5,6,8,9]
// this problem for particularly if he array is given
function fizzbuzz(){
    let mat = []
    for(var i=0;i<arr.length;i++){
        if(arr[i]%3==0){
            mat.push("fizz")
        }
        else if(arr[i]%5==0){
            mat.push("buzz")
        }
        else{
            mat.push(arr[i])
        }
    }
    return mat.join(" ,")
}

// console.log(fizzbuzz(arr))

// let S say that if you we have given a number instead of an array


function number_fizzbuzz(n){
    let matrix = []
    for(var i=0;i<n;i++){
        if(arr[i]%3==0){
            matrix.push("fizz")
        }
        else if(arr[i]%5==0){
            matrix.push("buzz")
        }
        else{
            matrix.push(arr[i])
        }
    }
    return matrix.join(",")
}

console.log(number_fizzbuzz(10))