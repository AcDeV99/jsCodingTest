function solution(hp) {
  if (hp < 0 || hp > 1000) return;
  if (Number.isInteger(hp) !== true) return;
  // let result = 0;
  // if (hp / 5 >= 1) {
  //   result += ~~(hp / 5);
  //   hp = hp - 5 * ~~(hp / 5);
  // }
  // if (hp / 3 >= 1) {
  //   result += ~~(hp / 3);
  //   hp = hp - 3 * ~~(hp / 3);
  // }
  // result += hp;
  // return result;
  return ~~(hp / 5) + ~~((hp % 5) / 3) + ((hp % 5) % 3);
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
