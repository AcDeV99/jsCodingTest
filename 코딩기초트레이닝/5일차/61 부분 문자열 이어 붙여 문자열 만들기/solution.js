// https://school.programmers.co.kr/learn/courses/30/lessons/181911
function solution(my_strings, parts) {
  let result = '';
  const lenParts = parts.length;
  for (let i = 0; i < lenParts; i++) {
    result += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
  }
  return result;
}

// reduce(), 구조분해할당 이용
function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [start, end] = parts[i];
    return result + str.substring(start, end + 1);
  }, '');
}

console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
); // programmers
