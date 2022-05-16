

function flip(arr){
    let regex = /(,)/g
    
  for(var i=0;i<arr.length;i++){
    let mat = []
    if(i%2!=0){
        mat.push(arr[i].reverse())
    }
    else{
        mat.push(arr[i])
    }
    console.log(mat.join(" ").replace(regex," "))
  }

  

 
  
}

function runProgram(input) {
    
          input  = input.split("\n")
          let [row,col] =   input[0].trim().split(" ").map(Number)
          let line=1;
          let arr= []
          for(let i=0;i<row;i++){
            arr.push(input[line++].trim().split(" ").map(Number))
          }
          //console.log(arr)
          flip(arr)

}
if (process.env.USERNAME === "naveed") {
  runProgram(`4 2
  1 2
  3 4
  5 6
  7 8
  `);
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