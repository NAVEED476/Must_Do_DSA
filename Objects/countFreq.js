// How do you count the frequency of elements in an array using objects?

let arr = ['a', 'b', 'a', 'c', 'b', 'a'];

function countFreq(){
    let freq = {};

    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        freq[item] = (freq[item] || 0) +1
    }
    return freq;
}

console.log(countFreq(arr));