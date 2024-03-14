function substring(str,target){
    let res=[]
    for(let i=0;i<str.length;i++){
       for(let j=0;j<=str.length;j++){
        res.push(str.substring(i, j));
       }
    }
    //console.log(res.join(" "))
    let count =0;

    for(let j=0;j<res.length;j++){
        if(res[j].charAt(res[j].length-1)===target){
            count++
        }
       
    }
    console.log(count);
    
}
function runProgram(input) {
    input=input.trim().split("\n")
    let test = +input[0]
    let line = 1
    for(let i=0;i<test;i++){
        let size = +input[line++]
        let str = input[line++].trim()
        let target = input[line++].trim()
        //console.log(str,target);
        substring(str,target)
        
    }

}
if (process.env.USERNAME === "HP") {
  runProgram(`1
  4
  aman
  a`);
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