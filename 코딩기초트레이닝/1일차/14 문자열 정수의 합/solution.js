function solution(num_str) {
  return num_str.split("").reduce((acc, cur) => +acc + +cur, 0);
}

console.log(solution("123456789")); // 45
console.log(solution("1000000")); // 1
