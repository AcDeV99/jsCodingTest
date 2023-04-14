// function solution(my_string, num1, num2) {
//   if (my_string.length <= 1 || my_string.length >= 100) return;
//   if (
//     num1 < 0 ||
//     num2 < 0 ||
//     num1 >= my_string.length ||
//     num2 >= my_string.length
//   )
//     return;
//   if (num1 === num2) return;
//   // my_string = my_string.toLowerCase();

//   result = my_string.split("");
//   let temp = result[num1];
//   result[num1] = result[num2];
//   result[num2] = temp;
//   return result.join("");
// }

function solution(my_string, num1, num2) {
  if (my_string.length <= 1 || my_string.length >= 100) return;
  if (
    num1 < 0 ||
    num2 < 0 ||
    num1 >= my_string.length ||
    num2 >= my_string.length
  )
    return;
  if (num1 === num2) return;

  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("").toLowerCase();
}

// 문자열 상태로 변경하기엔 제대로 변경이 안되므로 split으로 배열로 만들고 해결 후, join으로 다시 합친다.

console.log(solution("Hello", 1, 2));
console.log(solution("I love you", 3, 6));
