// function solution(my_string) {
//   if (my_string < 1 || my_string > 1000) return;
//   my_string = my_string.replace(/[^a-z]/gi, "");

//   let result = my_string.split("");
//   result.forEach((element, index) => {
//     result[index] === element.toLowerCase()
//       ? (result[index] = element.toUpperCase())
//       : (result[index] = element.toLowerCase());
//   });
//   return result.join("");
// }

function solution(my_string) {
  if (my_string < 1 || my_string > 1000) return;
  my_string = my_string.replace(/[^a-z]/gi, "");

  return my_string
    .split("")
    .map((element) =>
      element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase()
    )
    .join("");
}

console.log(solution("cccCCC"));
console.log(solution("abCdEfghIJ"));
