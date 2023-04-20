// function solution(n) {
//   let answer = '';
//   for (let i = 0; i < n; i++) {
//     i % 2 === 0 ? (answer += '수') : (answer += '박');
//   }
//   return answer;
// }

// 수박을 반복하고 n이 홀수이면 수 추가 // 아주 빠름
const solution = (n) => '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');

console.log(solution(3));
console.log(solution(4));
