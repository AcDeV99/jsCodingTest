function solution(my_string) {
  if (my_string.length < 1 || my_string.length > 1000) return 0;
  let result = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, ele) => acc + Number(ele), 0);
  return result;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));
