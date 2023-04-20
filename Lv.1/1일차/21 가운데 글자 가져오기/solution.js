// function solution(s) {
//   return s.length % 2 === 1
//     ? s
//         .split('')
//         .splice(~~(s.length / 2), 1)
//         .join('')
//     : s
//         .split('')
//         .splice(s.length / 2 - 1, 2)
//         .join('');
// }

// function solution(s) {
//   return s.length % 2 === 0
//     ? s.substring(s.length / 2 - 1, s.length / 2 + 1)
//     : s.substring(~~(s.length / 2), ~~(s.length / 2) + 1);
// }

// substring 함수 한번 사용한게 제일 빠름
function solution(s) {
  return s.substring(
    s.length % 2 === 0 ? s.length / 2 - 1 : ~~(s.length / 2),
    s.length % 2 === 0 ? s.length / 2 + 1 : ~~(s.length / 2) + 1
  );
}

console.log(solution('abcde'));
console.log(solution('qwer'));
console.log(solution('qwerty'));
console.log(solution('qwertyu'));
