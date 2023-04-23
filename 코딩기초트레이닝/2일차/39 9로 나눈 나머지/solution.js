// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다. 특정 수는 다름
function solution(number) {
  const nineEtc =
    number.split('').reduce((acc, cur) => Number(acc) + Number(cur)) % 9;
  return nineEtc;
}

console.log(solution('123')); // 6
console.log(solution('78720646226947352489')); // 2
