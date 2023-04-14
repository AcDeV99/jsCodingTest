const solution = (num_list) => {
  num_list = num_list.filter(
    (num) =>
      1 <= num_list.length && num_list.length <= 1000 && 0 <= num && num <= 1000
  );
  return [...num_list].reverse();
  // return num_list.reverse();
};

// reverse() 함수를 배열에 바로 사용하면 원본이 변경되지만,
// [...배열명]에 사용하면 복사된 배열에 사용된다.
// [...] spread operator(전개연산자)는 배열이나 객체에서 element들을 꺼내어, 복사해줍니다.

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 1, 1, 1, 1, 2]));
console.log(solution([1, 0, 1, 1, 1, 3, 5]));
