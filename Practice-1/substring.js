// function substring(str){
//     for(let i=0;i<str.length;i++){
//         for(let j=i;j<str.length;j++){
//             let mat=""
//             for(let k=i;k<=j;k++){
//                 mat+=str[k]
//             }

//             console.log(mat)
            
//         }
//     }
// }
// substring("naveed")


// function using(str){
//     let res=[]
//     for(let i=0;i<str.length;i++){
//        for(let j=0;j<str.length;j++){
//         res.push(str.substring(i, j));
//        }
//     }
//     console.log(res)
// }
// using("naveed")


// function using_slice(str){
//     let mat=[]
//     for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<=str.length;j++){
//             mat.push(str.slice(i,j))
//         }
//     }
//     console.log(mat)
// }

// using_slice("naveed")


let number = 123456;
let rev = 0;
let lastdigit;

while(number!=0){
    lastdigit = number%10;
    rev = rev*10+lastdigit
    number=Math.floor(number/10)
}

console.log(rev)
console.log(number)