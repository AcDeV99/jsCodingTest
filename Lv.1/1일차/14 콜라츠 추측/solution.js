// 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
function solution(n) {
  let count = 500;
  let num = n;
  while (count > 0) {
    if (num === 1) return 500 - count;
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    count--;
  }
  return -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
