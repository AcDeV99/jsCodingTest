// function solution(absolutes, signs) {
//   return absolutes
//     .map((ele, i) => (signs[i] === true ? ele : ele * -1))
//     .reduce((acc, cur) => acc + cur, 0);
// }

// reduce 함수의 세번째 인자인 현재 인덱스를 사용해 map 과정을 줄일 수 있다
function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
