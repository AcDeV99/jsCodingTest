// function solution(strlist) {
//   strlist = strlist.filter(() => 1 <= strlist.length && strlist.length <= 100);
//   const regexp = /[^\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"a-z]/gi;
//   const result = [];
//   strlist.forEach(function (ele, index) {
//     strlist[index] = ele.replace(regexp, "");
//     result.push(strlist[index].length);
//   });
//   return result;
// }

// 정규식에 g를 안붙이면 replace()는 맨 처음에 발견된 것만 바꿈.
// g를 붙이면 전역으로 변경되면서 조건에 충족하는 모든 것을 바꿈.
// i를 붙이면 영어 대소문자 구분 없이 모두 포함.

// map을 사용하면 result라는 배열을 하나 더 만들 필요가 없음.
function solution(strlist) {
  strlist = strlist.filter(() => 1 <= strlist.length && strlist.length <= 100);
  const regexp = /[^\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"a-z]/gi;
  strlist.forEach((ele, index) => {
    strlist[index] = ele.replace(regexp, "");
  });
  return strlist.map((ele) => ele.length);
}

console.log(solution(["We한글", "are글이", "the있는", "world!데"]));
console.log(solution(["I", "Love", "Programmers."]));
