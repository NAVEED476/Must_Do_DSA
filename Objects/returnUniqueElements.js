// retunrn unique elements from an array

let arr =[1,2,3,1,2,1,3,4]

function  uniqueEle(arr){
    let obj = {};
    let uniqueArr=[];
    for(let i=0;i<arr.length;i++){
        let key =arr[i];
        if(!obj[key]){
            obj[key]=key;
            uniqueArr.push(obj[key])
        }
    }
    return uniqueArr;
}   

console.log(uniqueEle(arr));