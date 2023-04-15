// function solution(my_string) {
//   let result;
//   let nums = my_string.split(/\s[+-]\s/);
//   let signs = my_string.replace(/[^+-]/g, '');

//   nums.forEach((num, index) => {
//     nums[index] = Number(num);
//   });
//   result = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (signs[i - 1] == '+') result += nums[i];
//     else if (signs[i - 1] == '-') result -= nums[i];
//   }
//   return result;
// }

function solution(my_string) {
  const arr = my_string.split(' ');
  while (arr.length > 1)
    // shift() : 배열 가장 앞의 배열값 내보내기
    // unshift() : 배열 가장 앞에 배열값 추가
    // shfit()로 계산한 내용을 unshfit()로 다시 채움
    // +문자열 하면 숫자로 형변환
    // + 기호를 만나면 1, 그 외는 -1을 다음 숫자에 곱해서 양수, 음수로 만들어줌 -> +, - 기호 사용한 것과 같음.
    arr.unshift(+arr.shift() + (arr.shift() === '+' ? 1 : -1) * arr.shift());
  return arr[0];
}

console.log(solution('3 + 4 - 5 + 7')); // 9
