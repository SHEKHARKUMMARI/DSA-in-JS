const bubbleSort = (arr) => {
  // it will sort by finding i+1 th largest element and place it there
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) return arr;
  }
  return arr;
};

// find the nth smallest number in a array
const findNthSmallestNumber = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (i + 1 === n) {
      return arr[arr.length - n];
    }
  }
};

// console.log(bubbleSort([3, 1, 2, 9, 6, 7]));
console.log(findNthSmallestNumber([3, 1, 2, 9, 6, 7], 5));
