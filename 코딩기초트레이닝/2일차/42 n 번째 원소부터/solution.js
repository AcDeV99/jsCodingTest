function solution(num_list, n) {
  const result = num_list.filter((_, i) => i >= n - 1);
  return result;
}

// 2배 더 빠름
function solution(num_list, n) {
  return num_list.slice(n - 1);
}

console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]
