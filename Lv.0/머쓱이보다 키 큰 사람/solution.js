const solution = (array, height) => {
  if (height < 0 || height > 200) return 0;
  let result = 0;
  array = array.filter(
    (item) =>
      array.length >= 1 && array.length <= 100 && item >= 1 && item <= 200
  );
  array.forEach((item) => {
    if (item > height) result++;
  });
  return result;
};

// filter() 함수로 배열에 머쓱이보다 큰 애만 남겨서 그 길이를 구해도 됨.
// function solution(array, height) {
//   var answer = array.filter(item => item > height);
//   return answer.length;
// }
console.log(solution([149, 180, 192, 170], 167));
console.log(solution([180, 120, 140], 190));
