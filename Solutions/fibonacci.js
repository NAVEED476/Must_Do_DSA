function fibonacci(n) {
  //   if (n === 1) return 1;
  //   if (n === 0) return 0;

  //     let a = 0;
  //     let b = 1;
  //     let fib = 1;
  //     for(let i=2;i<=n;i++){
  //         fib=a+b;
  //         a=b;
  //         b=fib;
  //     }
  //     return fib
  if (n == 1) return 1;
  if (n === 0) return 0;
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(15));
