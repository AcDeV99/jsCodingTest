// function solution(A, B) {
//   let arrA = [...A];
//   let result = 0;
//   if (A === B) return result;

//   for (let i = 0; i < A.length; i++) {
//     arrA.unshift(arrA.pop());
//     result++;
//     if (arrA.join().replace(/,/g, '') === B) break;
//     if (result === A.length) result = -1;
//   }
//   return result;
// }

console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));
console.log(solution('atat', 'tata'));
console.log(solution('abc', 'abc'));

let solution = (a, b) => (b + b).indexOf(a);

// apple;
// eappl;
// leapp;
// pleap;
// pplea;

// ohellohell
// elppaelppa
// tatatata
