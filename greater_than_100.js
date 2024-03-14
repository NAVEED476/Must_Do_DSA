
function hundred(arr){
    let sum = 0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    if(sum<=100){
        return "Lesser"
    }
    else{
        return "Greater"
    }
}


function runProgram(input) {
    
          input  = input.split("\n")
          let len = +input[0]
          let arr  =   input[1].trim().split(" ").map(Number)

          console.log(hundred(arr))
}
if (process.env.USERNAME === "naveed") {
  runProgram(`5
  21 24 2 54 8`);
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