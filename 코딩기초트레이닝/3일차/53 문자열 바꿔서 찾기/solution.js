// https://school.programmers.co.kr/learn/courses/30/lessons/181864
// 2배 더 빠른 성능
// function isReplaceAB(myString, pat) {
//   const newPat = pat
//     .replaceAll('A', 'T')
//     .replaceAll('B', 'A')
//     .replaceAll('T', 'B');
//   return myString.includes(newPat) ? 1 : 0;
// }

function isReplaceAB(myString, pat) {
  const newPat = [...pat].map((ele) => (ele === 'A' ? 'B' : 'A')).join('');
  return myString.includes(newPat) ? 1 : 0;
}

console.log(isReplaceAB('ABBAA', 'AABB')); // 1
console.log(isReplaceAB('ABAB', 'ABAB')); // 0
