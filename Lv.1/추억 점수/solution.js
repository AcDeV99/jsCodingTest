// function solution(name, yearning, photo) {
//   let n_dict = {};
//   let result = [];
//   for (let i = 0, len = name.length; i < len; i++) {
//     n_dict[name[i]] = yearning[i];
//   }
//   for (let i = 0, len = photo.length; i < len; i++) {
//     result.push(
//       photo[i].map(ele => n_dict[ele] ?? 0).reduce((acc, cur) => acc + cur, 0)
//     );
//   }
//   return result;
// }

// 코드는 더 짧지만 11번 테스트에 한에서 위에 코드가 4배 더 빠름
function solution(name, yearning, photo) {
  return photo.map(v =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);
