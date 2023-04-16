// function solution(a, b) {
//   let result = 2;
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대 공약수 구하는 공식
//   let num2 = b / gcd(a, b);

//   if (num2 === 1 || num2 === 2 || num2 === 5) result = 1;
//   while (num2 % 2 === 0) {
//     num2 /= 2;
//   }
//   while (num2 % 5 === 0) {
//     num2 /= 5;
//   }
//   if (num2 === 1) result = 1;
//   return result;
// }

function solution(a, b) {
  let num = b;
  while (num % 2 === 0) {
    num /= 2;
  }
  while (num % 5 === 0) {
    num /= 5;
  }
  if (a % num === 0) num = 1;
  return num === 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
console.log(solution(11, 154));
console.log(solution(7, 30));
console.log(solution(21, 121));
