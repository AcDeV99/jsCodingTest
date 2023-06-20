// function solution(players, callings) {
//   let result = [...players];
//   let front, back;
//   for (let i = 0, len = callings.length; i < len; i++) {
//     back = result.indexOf(callings[i]);
//     front = result.splice(back - 1, 1);
//     result.splice(back, 0, ...front);
//   }
//   return result;
// }
// // 9 ~ 13 테스트 시간초과

// function solution(players, callings) {
//   let result = [...players];
//   let index;
//   for (let i = 0, len = callings.length; i < len; i++) {
//     index = result.indexOf(callings[i]);
//     [result[index - 1], result[index]] = [result[index], result[index - 1]];
//   }
//   return result;
// }
// // 10 ~ 13 테스트 시간 초과

// function solution(players, callings) {
//   let result = [...players];
//   let index = 0;
//   let count = 0;
//   let value;
//   let valueIndex;
//   while (index < callings.length) {
//     if (callings[index] === callings[count]) {
//       count++;
//     } else {
//       valueIndex = result.indexOf(callings[index]);
//       value = result.splice(valueIndex, 1);
//       result.splice(valueIndex - count + index, 0, ...value);
//       index = count;
//     }
//   }
//   return result;
// }
// // 9 ~ 13 테스트 시간 초과

function solution(players, callings) {
  const playerMap = {};

  // calling 원소들의 idx를 미리 구해서 저장
  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const idx = playerMap[callings[i]];
    const temp = players[idx - 1];

    // 해당 idx와 이전 idx의 원소를 swap
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // map의 idx도 갱신
    playerMap[callings[i]] = idx - 1;
    playerMap[temp] = idx;
  }

  return players;
}

// splice(), indexOf()는 시간 복잡도가 높은 함수이므로 빠른 실행을 요구하는 문제에서
// object 사용을 권장한다.

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
// console.log(
//   solution(
//     ['mumu', 'soe', 'poe', 'kai', 'mine'],
//     ['kai', 'mine', 'mine', 'kai']
//   )
// );
