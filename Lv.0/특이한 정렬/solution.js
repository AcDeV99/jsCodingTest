// function solution(numlist, n) {
//   let result = [];
//   let sublist, abss, min, count;
//   // console.log(abss);
//   // console.log(min);
//   // console.log(numlist[sublist.indexOf(min)]);

//   while (numlist.length > 0) {
//     sublist = numlist.map((num) => num - n); // 뺀 값 리스트
//     abss = [...sublist].map((num) => Math.abs(num)); // 절대값 리스트
//     min = Math.min(...abss); // 절대값 중 가장 작은 값

//     count = abss.filter((ele) => ele === min).length;
//     console.log(count);

//     result.push(...numlist.splice(abss.indexOf(min), 1));
//   }

//   return result;
// }

// n과 가까운 수부터 정렬, n으로부터 거리가 같다면 더 큰수를 앞으로 배치
// function solution(numlist, n) {
//   return numlist.sort((a, b) => {
//     const [num1, num2] = [Math.abs(a - n), Math.abs(b - n)];
//     // 거리가 같다면 더 큰 수를 우선 배치
//     if (num1 === num2) return b - a;
//     // 다르다면 거리별 오름차순 정렬
//     return num1 - num2;
//   });
// }

function solution(numlist, n) {
  // Math.abs(a - n) - Math.abs(b - n) :
  // 계산 후 값이 0(거리가 같다면)이면 false이므로
  // || 뒤에 b - a 계산값 반환으로 큰 값이 앞에 오게 함.

  // 그 외 값(거리가 다르다면)이면 true 이므로
  // Math.abs(a - n) - Math.abs(b - n) 계산값 반환으로 거리별 오름차순 함.
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
