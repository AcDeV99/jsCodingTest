// function solution(numbers) {
//   numbers = numbers.filter(
//     (item) =>
//       -10000 <= item &&
//       item <= 10000 &&
//       1 <= numbers.length &&
//       numbers.length <= 1000
//   );
//   return numbers.map((item) => item * 2);
// }

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));

// map 메소드는 요소를 일괄적으로 변경하는데 효과적이다.
// map은 콜백 함수의 리턴을 모아서 새로운 배열을 만드는 것이 목적이다.
