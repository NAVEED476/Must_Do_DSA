let person = {
    name:"naveed",
    email:"naveed@gmail.com",
    age:25
}


// shallow copy 

let shallowCopy = Object.assign({},person);
shallowCopy.age=30

console.log(person)
console.log(shallowCopy)

let deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.age=40;
console.log(person)
console.log(deepCopy)
