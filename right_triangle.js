const right_triangle = (a,b,c) =>{
    if((a**2)+(b**2)==(c**2)){
        return "Yes"
    }
    else{
        return "No"
    }
}



function runProgram(input) {
 
    
          input  = input.split("\n")
          let [a,b,c] = input[0].trim().split(" ").map(Number)
        //   console.log(a,b,c)
          console.log(right_triangle(a,b,c))
}
if (process.env.USERNAME === "naveed") {
  runProgram(`3 4 5`);
} else {``
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