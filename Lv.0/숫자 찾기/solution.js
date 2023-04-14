function solution(num, k) {
  if (num <= 0 || num >= 1e6) return;
  if (k < 0 || k >= 10) return;
  return num.toString().includes(k) ? num.toString().indexOf(k) + 1 : -1;
}

// 문자열에서만 includes()함수 사용이 된다.

// function solution(num, k) {
//   return (
//     num
//       .toString()
//       .split("")
//       .map((el) => Number(el))
//       .indexOf(k) + 1 || -1
//   );
// }

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
