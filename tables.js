function table(n){
    let mat=[]
    for(var i=1;i<=10;i++)
    {
        mat.push(i*n)
    }

    console.log(mat.join(" "))
}



function runProgram(input) {
    
          input  = input.split("\n")
          let test = +input[0]
          let line =1;
          for(var i=0;i<test;i++){
              let num =   input[line++].trim().split(" ").map(Number)

              table(num)
          }
}
if (process.env.USERNAME === "naveed") {
  runProgram(`2
  3
  4`);
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