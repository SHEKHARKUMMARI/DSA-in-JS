const mp = new Map([
  [1, 3],
  [2, 4],
]);
mp.set(1, 5);
console.log(mp?.get(1));

const marks = [
  { name: "A", rank: 1, type: "x" },
  { name: "B", rank: 2, type: "y" },
  { name: "C", rank: 1, type: "x" },
  { name: "D", rank: 4, type: "y" },
  { name: "E", rank: 5, type: "x" },
];
const abc = Map.groupBy(marks, ({ type, rank }) => {
  return `${type}_${rank}`;
});
console.log(Object.fromEntries(abc));
