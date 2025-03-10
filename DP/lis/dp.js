const longestIncreasingSubSequencelength = (arr = []) => {
  const lis = Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] <= arr[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  return lis;
};

const longestIncreasingSubSequence = (arr, lis) => {
  const lisIndex = lis.indexOf(Math.max(...lis));
  const result = [arr[lisIndex]];
  let i = lisIndex;
  while (i >= 0) {
    const secondLis = lis.indexOf(Math.max(...lis.slice(0, i)));
    result.unshift(arr[secondLis]);
    i = secondLis;
  }

  return result;
};
const arr = [3, 4, 2, 8, 10, 5, 1];
const lis = longestIncreasingSubSequencelength(arr);
const str = longestIncreasingSubSequence(arr, lis);
console.log(
  str,
  lis,
  Math.max(...longestIncreasingSubSequencelength([3, 4, 2, 8, 10, 5, 1]))
);
