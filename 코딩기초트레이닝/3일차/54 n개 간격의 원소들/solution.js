// https://school.programmers.co.kr/learn/courses/30/lessons/181888
// function setDistanceList(num_list, n) {
//   return num_list.filter((num, i) => (i % n ? null : num));
// }

// 더 빠른 성능
// filter() : true면 배열 내 값 반환, false면 반환안함.
function setDistanceList(num_list, n) {
  return num_list.filter((_, i) => !(i % n));
}

console.log(setDistanceList([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(setDistanceList([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
