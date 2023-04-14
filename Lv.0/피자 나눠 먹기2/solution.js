function solution(n) {
  if (n < 1 || n > 100) return;
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

console.log(solution(6));
console.log(solution(10));
console.log(solution(4));
