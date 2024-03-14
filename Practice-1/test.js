// const arr = [1,2,3,4,5,6,7]
// let slicedArr = arr.slice(0,1)
// console.log(slicedArr)



// let numbers = [1, 2, 3, 4];

// numbers.forEach(function (element) {
//   console.log(element);
// });

// numbers.map((obj)=>{
//     console.log(obj*2)
// })


function add(a){
    return function(b){
        console.log(a+b)
    }
}
add(2)(3)