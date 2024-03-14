function reverse_number(num){
    let reverse = 0;


    while(num>0){
        reverse = (reverse*10)+(num%10)
        num = (Math.floor(num/10))
    }

    console.log(reverse)
}

reverse_number(1234)


console.log(Math.floor(1234/10))

console.log(123%10)