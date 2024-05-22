let person1 = {
    name:"naveed",
    email:"naveed@gmail.com",
    age:"23"
}
let person2 = {
    name:"bharath",
    email:"bharath@gmail.com",
    age:"25"
}

let person = [person1,person2]
console.log(person)

person.forEach(obj=> delete obj.age)
console.log(person)

person.forEach(obj=>
{
    obj.country = "India"
})
person.forEach(obj=>{
    obj.map()
})

console.log(person)