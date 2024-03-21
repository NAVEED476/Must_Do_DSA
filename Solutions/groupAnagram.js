// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
function gropuAnagrams (strs){
    let map ={};
    // for(let i=0;i<strs.length;i++){
    //     let key = strs[i].split("").sort().join("")
    //     if(map[key]){
    //         map[key].push(strs[i])
    //     }else{
    //         map[key] = [strs[i]]
    //     }
    // }

    for(let s of strs){
        let key = s.split("").sort().join("")
        if(map[key]){
            map[key].push(s)
        }else{
            map[key] = [s]
        }
    }

    return Object.values(map)
}
const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(gropuAnagrams(strs))


// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]