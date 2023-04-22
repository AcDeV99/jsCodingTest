// function solution(num_list) {
//   let result = 0;
//   for (let i = 0, len = num_list.length; i < len; i++) {
//     if (num_list[i] >= 0) result++;
//     else return result;
//   }
//   return -1;
// }

// 지금같은 특정 상황에선 이게 더 빠름
const solution = (num_list) => num_list.findIndex((v) => v < 0);

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
