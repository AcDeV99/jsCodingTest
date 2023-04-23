function solution(my_string, is_suffix) {
  return my_string.slice(-`${is_suffix.length}`) === is_suffix ? 1 : 0;
}

// 더 빠름
// String.prototype.endsWith() : 특정 문자열로 끝나면 true 반환, 아니면 false 반환
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

console.log(solution('banana', 'ana')); // 1
console.log(solution('banana', 'nan')); // 0
console.log(solution('banana', 'wxyz')); // 0
console.log(solution('banana', 'abanana')); // 0
