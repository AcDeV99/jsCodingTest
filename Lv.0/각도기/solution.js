// function solution(angle) {
//   if (~~angle !== angle) return;
//   if (angle > 0 && angle < 90) return 1;
//   else if (angle === 90) return 2;
//   else if (angle > 90 && angle < 180) return 3;
//   else if (angle === 180) return 4;
//   else return;
// }

// function solution(angle) {
//   if (angle > 180) return;
//   return [0, 90, 91, 180].filter((x) => angle >= x).length;
// }

function solution(angle) {
  if (angle < 0 || angle > 180) return;
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

console.log(solution(-1));
console.log(solution(70));
console.log(solution(90));
console.log(solution(91));
console.log(solution(180));
console.log(solution(361));
