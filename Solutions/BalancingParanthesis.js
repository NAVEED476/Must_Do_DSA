function isBalanced(str){
    let stack = [];

    for(let i=0;i<str.length;i++){
        if(str[i] == "(" || str[i]=== "{" || str[i] === "["){
            stack.push(str[i])
        }else{
            if(stack.length === 0){
                return false;
            }
            else{
                const top = stack.pop();
                if((str[i] === ")" && top !== "(") || (str[i] === "]" && top !== "[") || (str[i] === "}" && top !== "{")){
                    return false
                }

            }
        }

    }

    return stack.length === 0;
}

const str1 = "[()]{}";
const str2 = "[(])";

console.log(isBalanced(str1)); // Output: false
console.log(isBalanced(str2)); // Output: false