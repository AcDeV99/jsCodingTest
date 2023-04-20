function solution(arr) {
  if (arr.length === 1) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

// 테스트 1번에서 4766ms 걸림
// function solution(arr) {
//   if (arr.length === 1) return [-1];
//   arr.splice(
//     arr.findIndex((ele) => ele === Math.min(...arr)),
//     1
//   );
//   return arr;
// }

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
console.log(solution([1, 2, 3, 4]));
