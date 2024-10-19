// count frequncey of an each letter in a given string

let str = "naveed";

function countFreq(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let item = str[i];
        freq[item] = (freq[item] || 0) + 1
    }
    return freq;

}
// console.log(countFreq(str))

let arr = ['naveed', 'bharath', 'aditya', ''];

function arrFreq(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            let newStr = countFreq(arr[i]);
            newArr.push({ ...newStr });
        }
    }
    return newArr;
}
console.log(arrFreq(arr));