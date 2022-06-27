function masai_comp(rows,arr){
   let mat = []
    var i = 0;

    var max = 0;
    var maximum = Array.from({length: rows}, (_, i) => 0);
    while (i < rows)
    {
        for (var j = 0; j < arr[i].length; j++)
        {
            if (arr[i][j] > max)
            {
                max = arr[i][j];
            }
        }
        maximum[i] = max;
        max = 0;
        i++;
       
 
    }
    // mat.push(maximum)
    // console.log(mat.join(" "))
    console.log(maximum.join(" "));
    
}
function runProgram(input) {
    input=input.trim().split("\n")
    let test = +input[0]
    let line =1;
    for(let i=0;i<test;i++){
        let [row,col] = input[line++].trim().split(" ").map(Number)
        let arr = []
        for(let j=0;j<row;j++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
      
        masai_comp(row,arr)
        
    }

}
if (process.env.USERNAME === "HP") {
  runProgram(`2
  3 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  3 3
  7 7 1
  4 3 10
  1 2 3`);
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