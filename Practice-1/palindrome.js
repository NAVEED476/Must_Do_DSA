let string = "a"

function palindrome (string){
    let left=0;
    let right = string.length-1;
    let count = 0 

    if(string.length==1){
        return "palindrome"
    }
    while(left<right){
        if(string[left]!=string[right]){
            return "not a palindrome"
        }
        else{
            left++;
            right--;
        }
    }

    return "palindrome"
}

console.log(palindrome(string))