function solution(my_string) {
  if (my_string.length < 1 || my_string.length > 1000) return "";
  my_string = my_string.toLowerCase().replace(/[^a-z\s]/g, "");
  return my_string.replace(/[aeiou]/g, "");
}

console.log(solution("bus"));
console.log(solution("nice to meet you!"));
