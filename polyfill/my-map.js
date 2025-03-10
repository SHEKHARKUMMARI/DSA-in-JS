Array.prototype.myMap = function (callBackFun) {
  const arr = this;
  const mappedArray = [];
  for (let i = 0; i < arr?.length; i++) {
    const newEle = callBackFun(arr[i], i);
    mappedArray.push(newEle);
  }

  return mappedArray;
};
const workers = [
  { name: "A", salary: 20 },
  { name: "B", salary: 40 },
];
const salaries = workers.myMap((ele) => ele?.salary);
console.log("salaries", salaries);
