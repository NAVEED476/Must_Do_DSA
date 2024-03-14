function reverse_string(str) {

    if (str.length % 2 == 0) {
        let mid = Math.floor(str.length / 2)

        let reversed = ""
        for (var i = mid - 1; i >= 0; i--) {
            reversed += str[i]
        }

        for (let j = str.length - 1; j >= mid; j--) {
            reversed += str[j]
        }


        console.log(reversed)
    }
    else{
        let mid = Math.floor(str.length / 2)

        let reversed = ""
        for (var i = mid-1 ; i >= 0; i--) {
            reversed += str[i]
        }
        reversed+=str[mid]

        for (let j = str.length - 1; j > mid; j--) {
            reversed += str[j]
        }


        console.log(reversed)
    }
}







function runProgram(input) {
    reverse_string(input)

}
if (process.env.USERNAME === "naveed") {
    runProgram(`jsdfnsgnlewnl`);
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