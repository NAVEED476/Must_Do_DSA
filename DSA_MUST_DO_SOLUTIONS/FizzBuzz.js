function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3 ==0 && i%5==0){
            console.log( 'Fizz Buzz')
        }
        else if(i%3==0){
            console.log( 'Fizz')
        }
        else{
            console.log( 'Buzz')
        }
    }

}
fizzBuzz(15)