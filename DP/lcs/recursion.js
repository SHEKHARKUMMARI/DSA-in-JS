const findLCS = (str1, str2, m, n) => {
  if (m == 0 || n == 0) {
    return 0;
  }
  if (str1[m - 1] === str2[n - 1]) {
    return 1 + findLCS(str1, str2, m - 1, n - 1);
  }
  return Math.max(findLCS(str1, str2, m - 1, n), findLCS(str1, str2, m, n - 1));
};
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(findLCS(str1, str2, str1.length, str2.length));
