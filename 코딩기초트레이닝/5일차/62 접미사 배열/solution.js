// https://school.programmers.co.kr/learn/courses/30/lessons/181909
function solution(my_string) {
  const result = [];
  const lenStr = my_string.length;
  for (let i = 0; i < lenStr; i++) {
    result.push(my_string.substring(i, lenStr));
  }
  result.sort();
  return result;
}

// 0.01 ~ 0.05ms 정도 느리나 코드가 훨씬 깔끔
function solution(my_string) {
  return [...my_string].map((_, i) => my_string.substring(i)).sort();
}

console.log(solution('banana')); // ["a", "ana", "anana", "banana", "na", "nana"]
console.log(solution('programmers')); // ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]
