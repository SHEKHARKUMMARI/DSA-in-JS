Function.prototype.myBind = function myBind(...args) {
  const fun = this;
  const args1 = args.slice(1);

  return function (...args2) {
    return fun.apply(args[0], [...args1, ...args2]);
  };
};
function fun(a, b) {
  return a + b;
}
const a = fun.myBind(undefined, 1);
console.log(a(5));
