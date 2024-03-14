// function duplicates(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         obj[arr[i]] = "something"
//     }
//     console.log(Object.keys(obj))
// }




// duplicates(arr)


// function duplicats(arr){
//     let mat = []
//     for(let i=0;i<arr.length;i++){
//         let count = 0;
//         for(let j=0;j<mat.length;j++){
//             if(arr[i]==mat[j]){
//                 // mat.push(arr[i])
//                 count++
//             }
//         }

//         if(count==0){
//             mat.push(arr[i])
//         }
//     }

//     console.log(mat)
// }

// let arr = [1,2,3,1,3,1,5]
// duplicats(arr)


function duplicates(arr){
    let mat = []

    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<mat.length;j++){
            if(arr[i]==mat[j]){
                count++
                return true
            }


        }
        // console.log(count)
        if(count==0){
            mat.push(arr[i])
        }
    }
    return false
}

let arr =  [1,2,3]
console.log(duplicates(arr))


