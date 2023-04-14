// function solution(s) {
//   arrS = s.split(' ');
//   for (let i = 0; i < arrS.length; i++) {
//     if (arrS[i] === 'Z') {
//       arrS[i - 1] = 0;
//       arrS[i] = 0;
//     }
//   }
//   for (let i = 0; i < arrS.length; i++) {
//     arrS[i] = Number(arrS[i]);
//   }
//   return arrS.reduce((acc, cur) => acc + cur);
// }

console.log(solution('10 Z 20 Z 1'));
console.log(solution('1 2 Z 3'));

function solution(s) {
  const stack = [];

  // 일단 Z가 아니면 숫자니까 stack 배열에 넣고 Z를 만나면 다시 빼줌.
  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
