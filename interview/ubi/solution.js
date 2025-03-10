const arr = [7, 6, 4, 3, 1];

const getDistingK = (arr, k) => {
  const freq = new Array(256).fill(0);
  for (let i = 0; i < arr?.length; i++) {
    freq[arr[i].charCodeAt(0)]++;
  }

  let count = 0;
  for (let i = 0; i < arr?.length; i++) {
    // console.log(freq[arr[i].charCodeAt(0)], "test", arr[i]);
    if (freq[arr[i].charCodeAt(0)] == 1) {
      count++;
    }
    if (count === k) {
      return arr[i];
    }
  }
};

const flatten = (arr, n) => {
  const flattenedArray = arr?.reduce((acc, ele) => {
    if (Array.isArray(ele) && n > 0) {
      return [...acc, ...flatten(ele, n - 1)];
    }
    return [...acc, ele];
  }, []);
  return flattenedArray;
};

const maxProfit = (arr) => {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const dyaProfit = arr[j] - arr[i];
      if (dyaProfit > profit && dyaProfit > 0) {
        profit = dyaProfit;
      }
    }
  }
  return profit;
};

console.log(maxProfit(arr));
