function binaryRep(n){
    let binary = n.toString(2)

   while(binary.length < 32){
     binary = "0" + binary
   }
   return binary
}
console.log(binaryRep(7))