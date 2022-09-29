const maxSumArray = (_numbs) => {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < _numbs.length; i++) {
    currentSum = Math.max(_numbs[i], currentSum + _numbs[i]);
    maxSum = Math.max(currentSum, maxSum);
  };
  return maxSum
}

const aNumbs = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const bNumbs = [1, 2, 3, 4, -10];
console.log("aNumbs Value ->", maxSumArray(aNumbs)); // aNumbs Value -> 6
console.log("bNumbs Value ->", maxSumArray(bNumbs)); // bNumbs Value -> 10