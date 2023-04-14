function solution(n) {
  if (n <= 0 || n > 3628800) return;
  let [num, result] = [1, 0];
  while (n >= num) {
    result++;
    num *= result + 1;
  }
  return result;
}

// function solution(n) {
//   for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
// }

console.log(solution(3628800));
console.log(solution(7));
console.log(solution(5));
