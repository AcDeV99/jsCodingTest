// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다.
function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join('');
}

console.log(solution(['abc', 'def', 'ghi'], 'ef')); // 1
console.log(solution(['abc', 'bbc', 'cbc'], 'c')); // 69
