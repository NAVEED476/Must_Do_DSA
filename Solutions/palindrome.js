function palindrome(str){

    // normal Method

    // let str1 = str.split("").reverse().join("")
    // return str === str1 ? "palindrome" : "not a palindrome"

    

    let left = 0;
    let right = str.length-1;

    while(left<right){
        if(str[left] !== str[right]){
            return "not a palindrome"
        }else{
            left++;
            right--;
        }

    }
    return "palindrome"


}

console.log(palindrome("abac"))