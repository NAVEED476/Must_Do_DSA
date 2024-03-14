



function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1;
    for(let i=0;i<test;i++){
        let [row,col] = input[line++].trim().split(" ").map(Number)
        let arr = []
        for(var j=0;j<row;j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        console.log(row,col,arr[1][0])
    }


}
if (process.env.USERNAME === "naveed") {
  runProgram(`
  1
  5 5 
  1 2 3 4 5
  1 2 3 4 5
  1 2 3 4 6
  1 2 3 45 6
  1 3 5 5 3`);
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