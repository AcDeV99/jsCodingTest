function solution(arr, idx) {
  const lenArr = arr.length;
  for (let i = idx; i < lenArr; i++) {
    if (arr[i] === 1) return i;
  }
  return -1;
}
console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
