const findLCS = (str1, str2) => {
  const m = str1.length,
    n = str2?.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
};
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(findLCS(str1, str2));
