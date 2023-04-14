// const solution = (numbers) => {
//   numbers = numbers.filter(
//     (number) =>
//       0 <= number &&
//       number <= 10000 &&
//       2 <= numbers.length &&
//       numbers.length <= 100
//   );
//   // 오름차순
//   // numbers.sort((a, b) => {
//   //   if (a > b) return 1;
//   //   if (a === b) return 0;
//   //   if (a < b) return -1;
//   // });
//   // return numbers[numbers.length - 1] * numbers[numbers.length - 2];

//   // 내림차순
//   numbers.sort((a, b) => {
//     if (a < b) return 1;
//     if (a === b) return 0;
//     if (a > b) return -1;
//   });
//   return numbers[0] * numbers[1];
// };

function solution(numbers) {
  numbers.sort((a, b) => b - a); // 간략화한 내림차순
  return numbers[0] * numbers[1];
}
console.log(solution([1, 5, 10, 4, 3]));
console.log(solution([0, 31, 24, 10, 1, 9]));
