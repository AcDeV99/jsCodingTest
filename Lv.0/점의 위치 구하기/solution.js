const solution = (dot) => {
  dot = dot.filter(
    (item) => dot.length === 2 && item !== 0 && item >= -500 && item <= 500
  );
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
};

console.log(solution([2, 4]));
console.log(solution([-7, 9]));
console.log(solution([7, -9]));
console.log(solution([-7, -9]));
