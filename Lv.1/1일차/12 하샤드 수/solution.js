// x % x의 자릿수의 총합 === 0이면 '하샤드 수'이다
function solution(x) {
  return x %
    x
      .toString()
      .split('')
      .reduce((acc, cur) => +acc + +cur) ===
    0
    ? true
    : false;
}

// function solution(x) {
//   let num = x;
//   let sum = 0;
//   do {
//     sum += x % 10;
//     x = Math.floor(x / 10);
//   } while (x > 0);

//   return !(num % sum);
// }

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
