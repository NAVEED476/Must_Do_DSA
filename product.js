
function product(arr1,arr2){
    let mul=1
    for(var i=0;i<arr1.length;i++){
        mul*=arr1[i]
    }
    for(var j=0;j<arr2.length;j++){
        mul*=arr2[j]
    }
    console.log(mul)
}


function runProgram(input) {
    
          input  = input.split("\n")
          let test = +input[0]
          let line=1;
          for(var i=0;i<test;i++){
              let size =   input[line++].trim().split(" ").map(Number)
              let arr1 =   input[line++].trim().split(" ").map(Number)
              let arr2 =   input[line++].trim().split(" ").map(Number)
              product(arr1,arr2)
          }

}
if (process.env.USERNAME === "naveed") {
  runProgram(`1
  3
  1 2 3
  2 3 1`);
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