function bestTime(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let minPrice = arr[0];
  let profit = 0;

  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    profit = Math.max(profit, arr[i] - minPrice);
  }
  return profit;
}
const arr = [7, 1, 5, 3, 6, 4];
console.log(bestTime(arr));
