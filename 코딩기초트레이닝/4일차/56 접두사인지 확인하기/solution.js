// https://school.programmers.co.kr/learn/courses/30/lessons/181906
function checkPrefix(my_string, is_prefix) {
  return my_string.substring(0, is_prefix.length) === is_prefix ? 1 : 0;
}

console.log(checkPrefix('banana', 'ban')); // 1
console.log(checkPrefix('banana', 'nan')); // 0
console.log(checkPrefix('banana', 'abcd')); // 0
console.log(checkPrefix('banana', 'bananan')); // 0
