const maxProduct = (arr) => {
  // in this alogithm we exclude i element and check if any max is there left or right
  let maxProduct = arr[0];
  let leftPoduct = 1;
  let rigthProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    leftPoduct = leftPoduct == 0 ? 1 : leftPoduct;
    rigthProduct = rigthProduct == 0 ? 1 : rigthProduct;
    leftPoduct *= arr[i];
    rigthProduct *= arr[arr?.length - 1 - i];
    maxProduct = Math.max(leftPoduct, rigthProduct, maxProduct);
  }
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, -5, 6, -1, 4]));
