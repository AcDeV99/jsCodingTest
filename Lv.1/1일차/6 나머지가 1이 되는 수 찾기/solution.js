// function solution(n) {
//   let result = 0;
//   for (let i = n - 1; i > 0; i--) {
//     if (n % i === 1) result = i;
//   }
//   return result;
// }

// x에 초기값을 주고 while 반복문을 통해 작은값부터 시작하니
// if 조건문 만족하면 바로 함수 종료
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

console.log(solution(10));
console.log(solution(12));
