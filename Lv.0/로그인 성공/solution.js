// function solution(id_pw, db) {
//   let result;
//   let pwCount = 0;
//   db.forEach((datas) => {
//     if (datas[0] === id_pw[0]) {
//       datas[1] === id_pw[1] ? (result = 'login') : pwCount++;
//     }
//   });
//   if (result !== 'login' && pwCount > 0) result = 'wrong pw';
//   if (result !== 'login' && result !== 'wrong pw') result = 'fail';

//   return result;
// }

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  console.log(map.entries());
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
);
console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ]
  )
);
console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ]
  )
);
