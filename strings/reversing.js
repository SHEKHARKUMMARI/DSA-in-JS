const dictionaryorder = (str1, str2, str3) => {
  const arr = [str1, str2, str3];
  return arr.sort().join(",");
};

console.log(dictionaryorder("abxc", "cdef", "abd"));
