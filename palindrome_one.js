let str = "A man, a plan, a canal: Panama";







let numbers = "n013rteilft"

let reg = /[0-9]/g;

let num = numbers.replace(reg,"")

console.log(num)


let names="naveed"

let res = new Set(names);
console.log(res)










let isPalindrome=(str)=>{
    let regex = /[^A-Za-z0-9]/g;
    const  final = str.replace(regex,"").toLowerCase();
    let left = 0;
    let count = 0
    let right = str.length-1;
    if(str.length=1){
        return true
    }
    while(left<right){
        if(final[left]!=final[right]){
            count++
        }
        else{
            left++;
            right--
        }
    }

    if(count==0){
        return true
    }
    else{
        return false
    }
}



