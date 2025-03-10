//  Number of Ways to Make Change
// Given an array of coin denominations and an amount,
//count the total number of unique ways to form the amount using the given coins.

// Input: coins = [1, 2, 5], amount = 5
// Output: 4
// Explanation: The 4 ways to make change are:
//   1. 1+1+1+1+1
//   2. 1+1+1+2
//   3. 1+2+2
//   4. 5

const coinChange = (arr, sum, length) => {
  if (length == 0) return 0;
  if (sum === 0) return 1;
  let res = coinChange(arr, sum, length - 1);
  if (sum >= arr[length - 1]) {
    res = res + coinChange(arr, sum - arr[length - 1], length);
  }
  return res;
};
// const coins = [1, 2, 5];
// const amount = 5;
//  o/p : 4

// const coins = [2];
// const amount = 3;
// o/p : 0

// const coins = [3];
// const amount = 9;
// o/p :1

const coins = [1, 2, 5, 10];
const amount = 10;
console.log(coinChange(coins, amount, coins.length));
