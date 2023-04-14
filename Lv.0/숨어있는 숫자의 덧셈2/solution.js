function solution(my_string) {
  return my_string.split(/[^0-9]/).reduce((acc, cur) => acc + Number(cur), 0);
}

// reduce() 함수와 map() 함수는 두줄 이상 작성하면 내용물을 return해줘야 정상적으로 동작한다.

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
console.log(solution("abcdZ"));
