function findDuplicate(arr) {
    // Initialize an object to store the count of each element
    const countMap = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    // Find the element with count > 1
    return Object.keys(countMap).find(key => countMap[key] > 1);
}

// Sample input
const N = 5;
const A = [1, 3, 3, 2, 4];

// Finding the duplicate
console.log("Output:", findDuplicate(A));
