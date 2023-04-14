// function solution(my_string) {
//   if (my_string <= 0 || my_string >= 100) return;
//   return my_string.toLowerCase().split("").sort().join("");
// }

function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}

// [...] 연산자를 사용해서 바로 배열로 만들어서 정렬하고 합침.

console.log(solution("Bcad"));
console.log(solution("heLLo"));
console.log(solution("Python"));
