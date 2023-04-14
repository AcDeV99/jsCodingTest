// function solution(emergency) {
//   let array = [...emergency].sort((a, b) => b - a);
//   let result = [];
//   emergency.forEach((emer) => {
//     array.forEach((arr) => {
//       if (emer === arr) result[emergency.indexOf(arr)] = array.indexOf(arr) + 1;
//     });
//   });
//   return result;
// }

// 내가 원한 식
function solution(emergency) {
  const rank = [...emergency].sort((a, b) => b - a);
  return emergency.map((n) => rank.indexOf(n) + 1);
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
// 76,24,3
// 1. emergency를 내림차순으로 정렬한다.
// 2. map 함수로 새로운 배열 반환
