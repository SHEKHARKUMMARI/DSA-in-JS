Array.prototype.myReducer = function (...args) {
  const [callBackFun, initialVal] = args;
  const arr = this;
  let startIndex = 0;
  let accumulator = initialVal;
  if (args?.length < 2) {
    accumulator = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr?.length; i++) {
    accumulator = callBackFun(accumulator, arr[i], i);
  }
  return accumulator;
};

const workers = [
  { name: "A", salary: 20 },
  { name: "B", salary: 40 },
];
const totalSalary = workers?.myReducer((acc, ele) => {
  return acc + ele?.salary;
}, 0);
console.log(totalSalary);
