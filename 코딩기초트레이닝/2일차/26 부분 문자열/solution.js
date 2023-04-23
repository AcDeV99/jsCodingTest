function solution(str1, str2) {
  return str2.split(str1).length === 1 ? 0 : 1;
}

function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

console.log(solution('abc', 'aabcc')); // 1
console.log(solution('tbt', 'tbbttb')); // 0
