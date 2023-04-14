function solution(my_string) {
  if (my_string < 1 || my_string > 110) return;
  my_string = my_string.replace(/[^a-z\s]/gi, "");

  return [...new Set(my_string)].join("");
}

// my_string 뿐만 아니라 new Set()을 함께 전개 연산자로 감싸야 한다.

console.log(solution("people"));
console.log(solution("We are the world"));
