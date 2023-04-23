function solution(rny_string) {
  const result = rny_string.replace(/[m]/g, 'rn');
  return result;
}

console.log(solution('masterpiece')); // "rnasterpiece"
console.log(solution('programmers')); // "prograrnrners"
console.log(solution('jerry')); // "jerry"
console.log(solution('burn')); // "burn"
