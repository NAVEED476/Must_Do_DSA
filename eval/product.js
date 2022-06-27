function product(arr){
    let mul = 1
    let mat =[]
    for(let i=0;i<arr.length;i++){
        mul*=arr[i]
    }
    for(let i=0;i<arr.length;i++){
        mat.push(mul/arr[i])
    }
    console.log(mat.join(" "));
    
}
function runProgram(input) {
    input=input.trim().split("\n");
    //console.log(input);
    let test = +input[0]
    let line =1;
    for(let i=0;i<test;i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number)
        //console.log(arr);
        product(arr)
        
    }
    


}
if (process.env.USERNAME === "HP") {
  runProgram(`2
  5
  1 2 3 4 5
  3
  3 2 7`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
  });
}