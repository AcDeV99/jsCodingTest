const solution = (sides) => {
  sides = sides.filter(
    (line) => sides.length === 3 && 1 <= line && line <= 1000
  );
  sides.forEach((line, index) => {
    sides[index] = ~~line;
  });
  sides.sort((a, b) => a - b);

  return sides[0] + sides[1] > sides[2] ? 1 : 2;
};
console.log(solution([1.5, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));

// forEach문 자동완성이 foreach로 될 때가 있는데, foreach로 쓰면 구문 오류나고, forEach로 작성해야 한다.
