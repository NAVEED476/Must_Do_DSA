// ## **Binary Representation of a Number**

function binaryRep(N){
    // console.log(N.toString(2))
    let binaryNum = N.toString(2);
    let padded = binaryNum.padStart(32,0)

    console.log(padded);
}
binaryRep(10)


