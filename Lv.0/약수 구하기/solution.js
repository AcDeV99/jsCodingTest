// function solution(n) {
//   if (n < 1 || n > 10000) return;
//   let answer = [];
//   let i = 0;
//   while (n > i++) {
//     if (n % i === 0) answer.push(i);
//   }
//   return answer;
// }

function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}

console.log(solution(24));
console.log(solution(29));
