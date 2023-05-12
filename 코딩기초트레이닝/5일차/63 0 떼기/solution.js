function solution(n_str) {
  const lenStr = n_str.length;
  for (let i = 0; i < lenStr; i++) {
    if (n_str[0] === '0') {
      n_str = n_str.replace(n_str[0], '');
    } else {
      break;
    }
  }
  return n_str;
}

// 약 1.5 ~ 2배 더 빠르고 깔끔
function solution(n_str) {
  return String(Number(n_str));
}

console.log(solution('0010')); // "10"
console.log(solution('854020')); // "854020"
