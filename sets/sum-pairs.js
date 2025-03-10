//  Find the Pairs That Sum to a Given Number
// Description:
// Given an array of integers (input1) and a target sum (input2), write a program to find all unique pairs of numbers from the array that add up to the target sum. Each number from the array can only be used once in a pair.

// Input:

// input1: An array of distinct positive integers.
// input2: A target sum (integer).
// Output:

// An array of unique pairs where the sum of each pair equals input2.

// Input:
// input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// input2 = 10;

// Output:
// [[4, 6], [3, 7], [2, 8], [1, 9]]

const uniqPairsToSum = (arr, sum) => {
  const seen = new Set();
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    const complement = sum - arr[i];

    if (seen.has(complement)) {
      pairs = [...pairs, [complement, arr[i]]];
    }
    seen.add(arr[i]);
  }

  return pairs;
};
console.log(uniqPairsToSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
