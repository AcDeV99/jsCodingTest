// https://school.programmers.co.kr/learn/courses/30/lessons/181870
function solution(strArr) {
  return strArr.filter((v) => !v.includes("ad"));
}

function solution(strArr) {
  return strArr.filter((v) => v.indexOf("ad") === -1);
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there", "are", "no", "a", "ds"])); // ["there","are","no","a","ds"]

// includes()와 indexOf()의 속도는 비등하나, match()는 현저히 느리다.
