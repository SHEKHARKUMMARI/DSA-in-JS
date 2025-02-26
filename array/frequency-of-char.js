const str = "ababbce";
const arr = new Array(256).fill(0);
for (let i = 0; i < str.length; i++) {
  arr[str.charCodeAt(i)]++;
}

for (let i = 0; i < 256; i++) {
  if (arr[i] !== 0) {
    console.log(String.fromCharCode(i), "->", arr[i]);
  }
}
