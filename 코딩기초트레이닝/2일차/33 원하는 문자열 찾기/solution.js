function solution(myString, pat) {
  const [lowString, lowPat] = [myString.toLowerCase(), pat.toLowerCase()];
  return lowString.includes(lowPat) ? 1 : 0;
}

console.log(solution('AbCdEfG', 'aBc')); // 1
console.log(solution('aaAA', 'aaaaa')); // 0
