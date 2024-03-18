function findKthChar(s, k) {
    let index = 0; // Index pointer in the decrypted string
    let i = 0; // Index pointer in the encrypted string

    while (i < s.length) {
        let char = s[i]; // Current character in the encrypted string
        let count = 0; // Count of repeated characters

        // If the next character is a digit, accumulate the count
        while (i < s.length && /\d/.test(s[i])) {
            count = count * 10 + parseInt(s[i]);
            i++;
        }

        // If the next character is not a digit, it's part of the decrypted string
        if (!/\d/.test(s[i])) {
            index += count; // Increment the index by the count
            // If the desired index 'k' falls within the range of the current character repetition
            if (k <= index) {
                return char; // Return the current character
            }
            i++;
        }
    }

    return null; // Return null if k is out of range
}

// Test cases
console.log(findKthChar("a2b3cd3", 7)); // Should return "c"
console.log(findKthChar("a10", 5)); // Should return "a"
