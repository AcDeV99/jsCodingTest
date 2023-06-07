// [실패]
// function solution(citations) {
//   let filtered = citations[0];
//   let sorted = [...citations].sort((a, b) => a - b);
//   let len = sorted.length;
//   if (citations.length === citations.filter(ele => ele === filtered).length)
//     return filtered;
//   if (sorted[0] >= len) return len;

//   let index = len % 2 ? Math.ceil(len / 2) - 1 : len / 2 - 1;
//   let down, up;
//   let result = [];
//   let value;

//   while (true) {
//     down = sorted.slice(0, index);
//     up = sorted.slice(index, len);
//     value = sorted[index] > up.length ? up.length : up[0];
//     if (value === 0) index++;
//     else if (
//       down.length <= value &&
//       up.length >= value &&
//       !result.includes(value)
//     ) {
//       result.push(value);
//       index++;
//     } else break;
//   }
//   return result.length ? Math.max(...result) : 0;
// }
/*
작은수부터 쭉 정렬해서
가운데 수부터 검사 시작해서
위로 : h편 이상 인용
나머지 : h편 이하 인용
위로 >= 나머지 인 경우, h편의 최소값 구하기
*/

// [정답]
function solution(citations) {
  citations.sort((a, b) => b - a);
  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answers++;
    }
  }
  return answers;
}
/*
[4,3,2,1,0]
논문 인용횟수를 내림차순으로 정렬하고 배열 길이만큼 for문을 돌린다.
자신의 인용횟수(cittations[i])가 자신보다 인용횟수가 많은 논문 수(i) 보다 많으면 정답 수를 1 증가시킨다.
자신의 인용횟수가 자신보다 인용횟수가 많은 논문 수와 같아 질때 의 answer를 return하면 정답이다.
*/

// [정답 리팩토링]
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([0])); // 0
console.log(solution([1])); // 1
console.log(solution([10000])); // 1
console.log(solution([0, 1, 2, 3, 4])); // 2
console.log(solution([10000, 9999, 9998, 9997, 9996])); // 5
console.log(solution([0, 10000])); // 1
console.log(solution([0, 5000, 10000])); // 2
console.log(solution(Array(10000).fill(4998))); // 4998
console.log(solution([46, 328, 8344, 164, 1])); // 4
