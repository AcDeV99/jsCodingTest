function solution(message) {
  if (message.length < 1 || message.length > 50) return 0;
  return message.replace(/[^a-z!~\s]/gi, "").length * 2;
}

console.log(solution("happy birthday!"));
console.log(solution("I love you~"));
console.log(
  solution(
    "happy birthday!happy birthday!happy birthday!happy birthday!happy birthday!happy birthday!"
  )
);
