// https://school.programmers.co.kr/learn/courses/30/lessons/181874
function exceptCharLowerAll(myString) {
  const regex = new RegExp(/a/, 'g');
  return myString.toLowerCase().replaceAll(regex, 'A');
}

console.log(exceptCharLowerAll('abstract algebra')); // "AbstrAct AlgebrA"
console.log(exceptCharLowerAll('PrOgRaMmErS')); // "progrAmmers"
