function firstbigger(arr,k){

    let mat = []
    for(var i=0;i<arr.length;i++){
        if(arr[i]>k){
            mat.push(arr[i])
        }
    }


   let mat1=  mat.sort((a,b)=>{return (a-b)})

    console.log(mat1[0])
}
let arr = [1,2,3,11,32,4,5,6,2,1,7]

firstbigger(arr,4)