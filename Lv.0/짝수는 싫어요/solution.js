function solution(n) {
  if (n < 1 || n > 100) return [];
  let result = [];
  let number = 1;
  while (n >= number) {
    result.push(number);
    number += 2;
  }

  return result;
}

console.log(solution(10));
console.log(solution(15));
