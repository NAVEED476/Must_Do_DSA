function checkPrime (n) {
    let count = 0;
    for(let i=2;i<n;i++){
        if(n%i==0){
            count++
        }
    }
   return count == 0 ? "prime" : "not a prime"
}

console.log(checkPrime(7))