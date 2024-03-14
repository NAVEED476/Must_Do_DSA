let names ="naveed"

let unique=[]

for(let i=0;i<names.length;i++){
    let count  = 0;

    for(var j=0;j<unique.length;j++){

        if(unique[j]==names[i]){
            count++
        }
    }
    if(count ==0 ){
        unique.push(names[i])
    }
}

console.log(unique)


let n ="naveed";

let res = new Set(n)
console.log(res)


let ana = "naveed"

let ana1 = "veedanm"

let res1 = ana.split("").sort().join("")

let re1 = ana1.split("").sort().join("")

if(res1===re1){
    console.log(true)
}
else{
    console.log(false)
}
console.log(res1,"",re1)