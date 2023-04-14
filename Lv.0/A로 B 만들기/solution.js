function solution(before, after) {
  before = before.replace(/[^a-z]/g, "");
  after = after.replace(/[^a-z]/g, "");
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
  // if (
  //   before.length > 0 &&
  //   before.length < 1000 &&
  //   before.length === after.length
  // ) {
  // }
}

console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));
console.log(solution("abcd!", "dcba"));
