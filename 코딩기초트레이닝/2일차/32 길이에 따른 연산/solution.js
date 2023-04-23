function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((acc, cur) => acc + cur, 0)
    : num_list.reduce((acc, cur) => acc * cur, 1);
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120
