function runProgram(input) {
  input = input.split("\n");
  let test = +input[0].trim();
  let line = 1;
  for (var i = 0; i < test; i++) {
    let str1 = input[line++].trim().split(" ").sort();
    console.log(line);
    let str2 = input[line++].trim().split(" ").sort();
    console.log(line);
    if (str1.join(" ") === str2.join(" ")) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}
if (process.env.USERNAME === "naveed") {
  runProgram(`2
  abcd
  dcab
  aa
  aaa`);
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
    process.exit(0);
  });
}
