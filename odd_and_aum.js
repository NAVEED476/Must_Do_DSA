function odd_even(arr){
    let odd=0;
    let even = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even+=arr[i]
        }
        else{
            odd+=arr[i]
        }

    }

    // console.log(even)

    // console.log(odd)

    if(even<odd){
        return "Odd"
    }
    

    else if(odd<=even){
        return "Even"
    }

    else{
        return  "Even"
    }
}



function runProgram(input) {

      input  = input.split("\n")
      let test = +input[0]
      let arr=   input[1].trim().split(" ").map(Number)

      console.log(odd_even(arr))

}
if (process.env.USERNAME === "naveed") {
  runProgram(`4
  2 2 2 3 3 `);
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