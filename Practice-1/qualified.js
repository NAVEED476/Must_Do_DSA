
function qualify(size,target,arr){
    let count = 0;
    let res = arr[target]
    //console.log(target)

    if(arr.length==1){
        return 1
    }

    for(var i=0;i<arr.length;i++){
        if(arr[i]<res){
            count++
        }
    }

    console.log(size-count)
}


function runProgram(input) {
    
          input  = input.split("\n")

          let [size,target] = input[0].trim().split(" ").map(Number)
          let arr = input[1].trim().split(" ").map(Number)

          qualify(size,target,arr)

}
if (process.env.USERNAME === "naveed") {
  runProgram(`8 5
  10 9 8 7 7 7 5 5`);
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