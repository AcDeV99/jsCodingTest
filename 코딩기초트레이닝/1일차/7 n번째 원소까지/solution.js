// function solution(num_list, n) {
//   return num_list.filter((_, i) => i < n);
// }

// 2배 더 빠름
function solution(num_list, n) {
  return num_list.slice(0, n);
}
console.log(solution([2, 1, 6], 1)); // [2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [5, 2, 1]
