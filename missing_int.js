
let missing = (arr) => {
    let sum = arr[0];
    let maxsum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (sum < arr[i]) {
            sum = arr[i]
        }

        maxsum += arr[i]


    }
    //console.log(maxsum)

    let sum1 = 0;

    for (var j = 0; j <= sum; j++) {
        sum1 += j
    }

    //console.log(sum1)


    return sum1-maxsum

}


function runProgram(input) {


    input = input.split("\n")
    let arr = input[0].trim().split(" ").map(Number)
    //console.log(arr)
    console.log(missing(arr))
}
if (process.env.USERNAME === "naveed") {
    runProgram(`4 5 1 3`);
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