function anagram(str1, str2){
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('');

    return s1 === s2

}
console.log(anagram("abcd","dcba"))
console.log(anagram("abcde","decba"))
console.log(anagram("abcd","dcbad"))
console.log(anagram("abcda","dcbaa"))