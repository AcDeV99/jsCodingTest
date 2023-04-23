// function solution(n) {
//   let result = 0;
//   if (n % 2) {
//     for (let i = 1; i <= n; i++) {
//       if (i % 2) result += i;
//     }
//   } else {
//     for (let i = 1; i <= n; i++) {
//       if (!(i % 2)) result += i ** 2;
//     }
//   }
//   return result;
// }

// 3배 더 빠름
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) ** 2;
  else return (n * (n + 1) * (n + 2)) / 6;
}

function solution(n) {
  return n % 2 === 1 ? ((n + 1) / 2) ** 2 : (n * (n + 1) * (n + 2)) / 6;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220
