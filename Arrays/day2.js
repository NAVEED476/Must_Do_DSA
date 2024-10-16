//**How do you loop through an array?**

const arr = [1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}

// arr.forEach((ele)=>console.log(ele));

// arr.map((ele)=>console.log(ele));

// arr.filter((obj)=>console.log(obj));

// **How do you find the index of an element in an array?**


// using the above array

let value = 3;

console.log(arr.indexOf(value));