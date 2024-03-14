// using the bruteforce appraoch for solving the three sum problem


let threesum = (arr) =>{
    let sum = 0;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            for(var k=j+1;k<arr.length;k++){
                if(sum<arr[i]+arr[j]+arr[k]){
                    sum = arr[i]+arr[j]+arr[k]
                }
            }
        }
    }

    return sum
}


let arr = [ 1, 0, 8, 6, 4, 2 ]

//console.log(threesum(arr))





// using the sort algorithm





function sum_using_sort(arr){
    let arr1 = arr.sort()

    let sum = arr1[arr.length-1]+arr[arr.length-2]+arr[arr.length-3]


    console.log(sum)
}


sum_using_sort(arr)

