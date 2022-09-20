

const Fibonacci = (n) => ({
  [Symbol.iterator]: () => {
    let i = 1, prev = 0, current = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [prev, current] = [current, (prev + current) || 1];
          return {
            value: prev,
            done: false
          }
        }
        else {
          return {
            done: true
          }
        }
      }
    }
  }
})

console.log(...Fibonacci(8))  // 0 1 1 2 3 5 8 13


console.log(...Fibonacci(8)) // [0, 1, 1, 2, 3, 5, 8, 13 ]