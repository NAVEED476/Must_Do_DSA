




function runProgram(input) {
    
          input  = input.split("\n")
          let [other,sachin] =  input[0].trim().split(" ").map(Number)
          console.log(other,sachin)
}
if (process.env.USERNAME === "naveed") {
  runProgram(`264 200`);
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