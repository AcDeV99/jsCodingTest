// https://school.programmers.co.kr/learn/courses/30/lessons/181834
function solution(myString) {
  return myString.replace(/[a-k]/g, 'l');
}

function solution(myString) {
  const lenStr = myString.length;
  let result = '';
  for (let i = 0; i < lenStr; i++) {
    if (myString.charCodeAt(i) < 108) result += 'l';
    else result += myString[i];
  }
  return result;
}

console.log(solution('abcdevwxyz')); // "lllllvwxyz"
console.log(solution('jjnnllkkmm')); // "llnnllllmm"
