const coinChange = (arr, sum) => {
  const dp = Array.from({ length: sum + 1 }, (x, index) =>
    new Array(arr.length + 1)?.fill(index == 0 ? 1 : 0)
  );

  for (let amount = 1; amount <= sum; amount++) {
    for (let len = 1; len <= arr?.length; len++) {
      const currentCoin = arr[len - 1];

      dp[amount][len] = dp[amount][len - 1];
      if (currentCoin <= amount) {
        dp[amount][len] = dp[amount][len] + dp[amount - currentCoin][len];
      } else {
        dp[amount][len] = dp[amount][len - 1];
      }
    }
  }
  return dp[sum][arr?.length];
};

const coins = [1, 2, 5, 10];
const amount = 10;
console.log(coinChange(coins, amount));
