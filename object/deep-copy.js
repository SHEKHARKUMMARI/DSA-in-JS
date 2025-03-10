const deppCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const a = { a: 1, b: 3 };
const b = deppCopy(a);
b.a = 6;
console.log(a);
