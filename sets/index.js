const set1 = new Set([1, 2, 3]);
const set3 = new Set([3, 4, 5]);
for (const ele of set1) {
  console.log(ele, typeof ele);
}
const arr = [...set1];
const arr2 = Array.from(set1);
console.log(
  arr,
  arr2,
  set1.intersection(set3),
  set1.difference(set3),
  set1.symmetricDifference(set3),
  set1.union(set3),
  set1.keys(),
  set1.values(),
  set1.entries()
);
for (const ele of set1.keys()) {
  console.log(ele, typeof ele);
}
for (const ele of set1.entries()) {
  console.log(ele, typeof ele);
}
