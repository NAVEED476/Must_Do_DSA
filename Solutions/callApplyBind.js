let obj = {
    fname:"naveed",
    lname:"s",
    getfullname:function(homeTown, city){
        return this.fname + " " + this.lname + homeTown + " " +city
    }

}

const obj2 = {
    fname:"Dhoni",  
    lname:"MS"
}


console.log(obj.getfullname.call(obj2))
console.log(obj.getfullname.apply(obj2,["v.kota", "chittoor"]))
const bindMethod = obj.getfullname.bind(obj2,"v.kota", "chittoor")
console.log(bindMethod());
