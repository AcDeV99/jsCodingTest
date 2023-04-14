// function solution(n, t) {
//   if (n < 1 || n > 10 || t < 1 || t > 15) return;
//   while (t-- > 0) n *= 2;
//   return n;
// }

// function solution(n, t) {
//   return n * 2 ** t;
// }
function solution(n, t) {
  return n << t; // n * 2 ** t 와 같다.
  // n >> t 는 n / 2 ** t 와 같다.
  // 비트 연산은 일반적인 연산보다 속도가 더 빠르다.
}
console.log(solution(2, 10));
console.log(solution(7, 15));
