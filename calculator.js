
let calculator = (a,b,c)=>{
    if(b=="+"){
        return (a+c)
    }
    if(b=="*"){
        return (a*c)
    }
    if(b=="-"){
        return (a-c)

    }
    if(b=="/") return (a/c)
}


function runProgram(input) {
    
          input  = input.split("\n")
          let [a,b,c] =   input[0].trim().split(" ")
          //console.log(a,b,c)

          console.log(calculator(Number(a),b,Number(c)))

}
if (process.env.USERNAME === "naveed") {
  runProgram(`2 + 3`);
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