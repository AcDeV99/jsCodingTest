function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((num) => {
    if (sum <= n) sum += num;
    else return;
  });
  return sum;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239
