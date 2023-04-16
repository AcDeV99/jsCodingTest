function solution(keyinput, board) {
  let [minX, maxX, minY, maxY] = [
    (board[0] - 1) / -2,
    (board[0] - 1) / 2,
    (board[1] - 1) / -2,
    (board[1] - 1) / 2,
  ];
  const keys = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  let coords = keyinput.map((ele) => {
    return keys[ele];
  });
  let [resultX, resultY] = [0, 0];
  coords.forEach((ele) => {
    resultX += ele[0];
    resultY += ele[1];
    if (resultX > maxX) resultX = maxX;
    else if (resultX < minX) resultX = minX;
    if (resultY > maxY) resultY = maxY;
    else if (resultY < minY) resultY = minY;
  });
  return [resultX, resultY];
}

// function solution(keyinput, board) {
//   let res = [0, 0];
//   for (let p of keyinput) {
//     switch (p) {
//       case 'left':
//         if (-res[0] < board[0] / 2 - 1) res[0]--;
//         break;
//       case 'right':
//         if (res[0] < board[0] / 2 - 1) res[0]++;
//         break;
//       case 'up':
//         if (res[1] < board[1] / 2 - 1) res[1]++;
//         break;
//       case 'down':
//         if (-res[1] < board[1] / 2 - 1) res[1]--;
//         break;
//     }
//   }
//   return res;
// }

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11])); // [2, 1]
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9])); //[0, -4]
