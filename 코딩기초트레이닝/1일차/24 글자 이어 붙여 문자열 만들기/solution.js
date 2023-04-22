// 제일 빠름
function solution(my_stirng, index_list) {
  let result = "";
  for (let i = 0, len = index_list.length; i < len; i++) {
    result += my_stirng[index_list[i]];
  }
  return result;
}

function solution(my_string, index_list) {
  return index_list.reduce((result, i) => result + my_string[i], "");
}

function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]) // "programmers"
);
console.log(solution("zpiaz", [1, 2, 0, 0, 3])); // "pizza"
