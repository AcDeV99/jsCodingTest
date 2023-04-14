function solution(array, n) {
  if (array.length < 1 || array.length > 100) return;
  if (n < 1 || n > 100) return;
  array = array.filter((ele) => ele >= 1 && ele <= 100);
  let result = array.sort((a, b) => a - b).map((ele) => Math.abs(n - ele));
  return array[result.indexOf(Math.min(...result))];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12, 25], 13));
console.log(solution([1, 50, 100], 13));
