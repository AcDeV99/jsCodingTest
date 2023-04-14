// function solution(slice, n) {
//   let result = 1;
//   if (2 <= slice && slice <= 10 && 1 <= n && n <= 100) {
//     while (slice * result < n) {
//       result++;
//     }
//     return result;
//   }
// }

function solution(slice, n) {
  return Math.ceil(n / slice);
}

console.log(solution(7, 10));
console.log(solution(4, 12));
