function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

console.log(solution('banana', 'ana')); // 1
console.log(solution('banana', 'wxyz')); // 0
