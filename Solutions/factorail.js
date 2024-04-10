function fact(n) {
  let mul = 1;
  if (n == 0) {
    return 1;
  }
//   for (let i = 1; i <= n; i++) {
//     mul *= i;
//   }
  else{
    return n * fact(n-1);
  }
}

console.log(fact(5));
