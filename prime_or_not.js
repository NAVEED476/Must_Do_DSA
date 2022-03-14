function prime(n){
    let count=0;
    for(var i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
        
    }
    if(count== 2){
        return "prime"
    }
    return "not a prime"

   
    

}

console.log(prime(23))