
function noddy(length,mul,arr){
   let left = -1;
   let right = 0;
   let count = 0;
   while(left<arr.length && right<arr.length){
       if(arr[left]<arr[right] ){
           console.log(arr[left])
           count++

       }
       left=right
       right++

       
   }

  console.log(mul*count)
}


function runProgram(input) {

    
          input  = input.split("\n")

          let test = +input[0]
          let line = 1;
          for(var i=0;i<test;i++){
              let [length,mul] =   input[line++].trim().split(" ").map(Number)
              let arr =   input[line++].trim().split(" ").map(Number)

              noddy(length,mul,arr)
          }
}
if (process.env.USERNAME === "naveed") {
  runProgram(`2
  6 3
  8 2 3 11 11 10
  5 12
  12 20 39 45 89`);
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