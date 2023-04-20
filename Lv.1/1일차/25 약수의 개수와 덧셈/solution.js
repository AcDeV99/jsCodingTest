// function solution(left, right) {
//   let result = [];
//   let sum = 0;
//   for (let i = left; i <= right; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) result.push(j);
//     }
//     result.length % 2 === 0 ? (sum += i) : (sum -= i);
//     result = [];
//   }
//   return sum;
// }

// 20배 이상 빠름
// 제곱근이 정수면 약수의 개수가 홀수다
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
