function solution(a, b) {
  const [ab, ba] = [Number(`${a}${b}`), Number(`${b}${a}`)];
  return ab > ba ? ab : ba;
}

// 더 빠름
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
