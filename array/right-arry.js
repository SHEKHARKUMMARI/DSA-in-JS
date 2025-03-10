const rightRotateArray = (arr, n) => {
  const len = arr.length;
  const bArray = arr.slice(0, len - n);
  const aArray = arr.slice(len - n, len);
  return [...aArray, ...bArray];

  //   while (n) {
  //     const lastEle = arr[len - 1];
  //     arr.pop();
  //     arr.unshift(lastEle);
  //     n--;
  //   }
};
console.log(rightRotateArray([2, 3, 4, 5, 7], 3));
