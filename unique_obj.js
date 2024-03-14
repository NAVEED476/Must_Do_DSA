let unique_obj = (arr) =>{
    let details = {}
    for(let i=0;i<arr.length;i++){
        details[arr[i]]="something"
    }


    return (Object.keys(details))  // it returns the unique elements beacause in the objects the keys should be unique  
}


let arr = [1,2,1,3,4,5,3,6,7,4,5]
console.log((unique_obj(arr).join(" ")))


let result = new Set(arr)
console.log(result)


function find_unique(arr){
    let uni = []

    for(let i=0;i<arr.length;i++){
        let count= 0  // initially the values i am getting in side the loop runs at a time when i compare to the next ele


        for(let j=0;j<uni.length;j++){
            if(uni[j]==arr[i]){
                count++
            }
        }

        if(count==0){
            uni.push(arr[i])
        }
    }

    console.log(uni)
}

find_unique(arr)