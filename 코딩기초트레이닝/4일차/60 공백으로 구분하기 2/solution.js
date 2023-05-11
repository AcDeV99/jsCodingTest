// https://school.programmers.co.kr/learn/courses/30/lessons/181868
function solution(my_string) {
  const result = my_string
    .trim()
    .split(' ')
    .filter((ele) => ele !== '');
  return result;
}

// filter 함수로 배열 내 빈 요소를 걸러낼 수 있다.
function solution(my_string) {
  return my_string.split(' ').filter((v) => v);
}

console.log(solution(' i    love  you')); // ["i", "love", "you"]
console.log(solution('    programmers  ')); // ["programmers"]
console.log(solution(' i    l ove  you')); // ["i", "l", "ove", "you"]
