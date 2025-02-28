const insertionSort = (arr) => {
  //it keeps i th's   array is sorted always
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
      arr[j] = key;
    }
  }
  return arr;
};

console.log(insertionSort([3, 1, 2]));
