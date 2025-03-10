var z = 1,
  y = (z = typeof y);
// typeof undefined ='undefined'
console.log(y);

const a = [1, 2, 3];
const b = "1,2,3";
console.log(a == b);
// == coerse one into another so , a users Array.toString
console.log("1" - -"1");
// - uninary operator coverts string into numbers
// so, output is 2

console.log(false || null || "Hello");
// || operator will give you first truthy value
console.log("Hello" && false && null);
// && opeartor will give you first falsy value

const arr1 = [1];
const arr2 = [2];
console.log(arr1 + arr2);
// when we do addition operator on array it will conevrt arr to string and do operation

console.log("2" + +"4");
