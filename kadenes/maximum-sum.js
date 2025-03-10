//  given an array , find the maximum sum sub array
const finMaxmiumSumbruteforce = (arr) => {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};

// each ele either can be added to subarray or strat new subarray with this element
// if addition to aubarray gives max than individual ele, it can contribute to max ele we can start new sub array
const findMaxSumSubArrayUsingKadnesAlgo = (arr) => {
  let max = arr[0];
  let curentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curentSum = Math.max(arr[i], curentSum + arr[i]);
    if (curentSum > max) {
      max = curentSum;
    }
  }
  return max;
};

// const arr = [5, 4, -1, 7, 8];
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(findMaxSumSubArrayUsingKadnesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
