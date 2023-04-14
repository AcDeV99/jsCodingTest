// const solution = (my_string, n) => {
//   let my_char = [];
//   let my_concat = "";
//   if (my_string.length >= 2 && my_string.length <= 5 && n >= 2 && n <= 10) {
//     my_string = my_string.replace(/[^a-z]/gi, "");
//     my_char = [...my_string]; // split 효과를 볼 수 있음. [...]으로 만드는 건 새로 쓸 때마다 새롭게 만들어 지는 것이므로 변수에 저장하지 않으면 다시 썼을 때는 이전 것과는 완전히 다른 별개의 것임.
//     my_char.forEach((char, index) => {
//       for (let i = 1; i < n; i++) {
//         my_char[index] += char;
//       }
//       my_concat += [...my_char[index]];
//     });
//     my_concat = my_concat.replace(/[,]/g, "");
//     return my_concat;
//   }
// };

const solution = (my_string, n) => {
  if (my_string.length >= 2 && my_string.length <= 5 && n >= 2 && n <= 10) {
    my_string = my_string.replace(/[^a-z]/gi, "");
    return [...my_string].map((v) => v.repeat(n)).join("");
  }
};

//repeat(n번) : 문자열 반복 함수
//join("구분자") : 배열 연결 함수

console.log(solution("hel1!", 5));
console.log(solution("hello", 5));
