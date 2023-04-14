// function solution(order) {
//   if (order < 1 || order > 1e6) return;
//   return order
//     .toString()
//     .split("")
//     .filter((ele) => ele > 0 && ele % 3 === 0).length;
// }

// matchAll() : 괄호 안의 것과 같은 것을 배열로 반환한다.
// matchAll()은 무조건 정규식에 /g가 들어가야 한다.
// 그렇지 않으면 에러가 발생한다.
function solution(order) {
  return [...order.toString().matchAll(/[369]/g)].length;
}

console.log(solution(3));
console.log(solution(294230));
console.log(solution(35963));
