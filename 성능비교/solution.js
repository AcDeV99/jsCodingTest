const array = new Array(1e6).fill().map((v, i) => i);

let sum = '';
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
