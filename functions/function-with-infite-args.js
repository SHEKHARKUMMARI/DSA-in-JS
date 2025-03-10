// funct should take sum(1)(2)(3)(4)...n and return  sum off all

const sum = (a) => {
  return (b) => {
    if (!b) return a;
    return sum(a + b);
  };
};
console.log(sum(3)(4)(2)());
