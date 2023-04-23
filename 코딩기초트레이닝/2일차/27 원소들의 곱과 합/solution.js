function solution(num_list) {
  const dup = num_list.reduce((acc, cur) => acc * cur, 1);
  const sumPow = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;
  return dup < sumPow ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
