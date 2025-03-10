const findProfit = (arr) => {
  let minPrice = Infinity;
  let maxprofit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else {
      const currentProfit = arr[i] - minPrice;
      if (currentProfit > maxprofit) {
        maxprofit = currentProfit;
      }
    }
  }
  return maxprofit;
};
console.log(findProfit([7, 1, 5, 3, 6, 4]));
